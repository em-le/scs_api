import { Injectable } from '@nestjs/common';
import { Connection, Types } from 'mongoose';
import { ParseStatus } from 'src/infra/repository/recruitment/constants';
import { IJobParserCreation } from 'src/infra/repository/recruitment/interfaces';
import { JobParserRepository } from 'src/infra/repository/recruitment/job-parser.repository';
import { JobRepository } from 'src/infra/repository/recruitment/job.repository';
import { JobDocument } from 'src/infra/repository/recruitment/schemas/job.schema';
import { TxClientResponse } from 'src/infra/textkernel/clients/abstract.client';
import { TxJobParserClient } from 'src/infra/textkernel/clients/parser/job-parser.client';
import {
  JobParsingTransaction,
  JobParsingTransactionStructuredResponseModel,
  StructuredParseJobOrderRequest,
} from 'src/infra/textkernel/openapi/data-contracts';
import { PRIMARY_CONNECTION } from 'src/internal/database/constants';
import { MongooseConnection } from 'src/internal/database/decorators/database.decorator';
import { FileHelper } from 'src/internal/helper/services/file.helper';

@Injectable()
export class JobParserService {
  constructor(
    @MongooseConnection(PRIMARY_CONNECTION)
    private readonly connection: Connection,
    private readonly jobRepo: JobRepository,
    private readonly jobParseRepo: JobParserRepository,
    private readonly fileHelper: FileHelper,
    private readonly txJobParserClient: TxJobParserClient,
  ) {}

  async parseJob(id: Types.ObjectId): Promise<void> {
    const job = await this.jobRepo.findOne({
      _id: id,
      parseStatus: ParseStatus.NOT_YET,
    });
    if (!job) {
      throw new Error('The job is not found');
    }

    await this.tryToParseJob(job);
  }

  private async tryToParseJob(job: JobDocument): Promise<void> {
    await this.jobRepo.updateOneById(job._id, {
      parseStatus: ParseStatus.PARSING,
    });
    try {
      const file = this.fileHelper.read(job.storage.location);
      const parserReponse = await this.executePaserRequest(file);
      return await this.updateResumeParser(job._id, parserReponse.data.Value);
    } catch (err) {
      await this.jobRepo.updateOneById(job._id, {
        parseStatus: ParseStatus.FAILED,
      });
      throw err;
    }
  }

  private async updateResumeParser(
    jobId: Types.ObjectId,
    jobParsing: JobParsingTransaction,
  ): Promise<void> {
    const resumeParserData: IJobParserCreation = {
      job: jobId,
      JobData: jobParsing.JobData,
    };
    const session = await this.connection.startSession();
    session.startTransaction();
    try {
      await Promise.all([
        this.jobParseRepo.create(resumeParserData),
        this.jobRepo.updateOneById(jobId, {
          parseStatus: ParseStatus.PARSED,
        }),
      ]);
      await session.commitTransaction();
    } catch (error) {
      await session.abortTransaction();
      throw new Error(error.message);
    } finally {
      await session.endSession();
    }
  }

  private async executePaserRequest(
    resume: Buffer,
  ): TxClientResponse<JobParsingTransactionStructuredResponseModel> {
    const parserRequest: StructuredParseJobOrderRequest = {
      DocumentAsBase64String: resume.toString('base64'),
      DocumentLastModified: new Date().toISOString().split('T')[0],
      SkillsSettings: {
        Normalize: true,
        TaxonomyVersion: 'v2',
      },
      ProfessionsSettings: {
        Normalize: true,
        Version: {
          ONET: '2019',
        },
      },
    };
    return this.txJobParserClient.call(parserRequest);
  }
}
