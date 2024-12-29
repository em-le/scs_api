import { Injectable } from '@nestjs/common';
import { Connection, Types } from 'mongoose';
import { ParseStatus } from 'src/infra/repository/recruitment/constants';
import { IResumeParserCreation } from 'src/infra/repository/recruitment/interfaces';
import { ResumeParserRepository } from 'src/infra/repository/recruitment/resume-parser.repository';
import { ResumeRepository } from 'src/infra/repository/recruitment/resume.repository';
import { ResumeDocument } from 'src/infra/repository/recruitment/schemas/resume.schema';
import { TxClientResponse } from 'src/infra/textkernel/clients/abstract.client';
import { TxResumeParserClient } from 'src/infra/textkernel/clients/parser/resume-parser.client';
import {
  ResumeParsingTransaction,
  ResumeParsingTransactionStructuredResponseModel,
  StructuredParseResumeRequest,
} from 'src/infra/textkernel/openapi/data-contracts';
import { PRIMARY_CONNECTION } from 'src/internal/database/constants';
import { MongooseConnection } from 'src/internal/database/decorators/database.decorator';
import { FileHelper } from 'src/internal/helper/services/file.helper';

@Injectable()
export class ResumeParserService {
  constructor(
    @MongooseConnection(PRIMARY_CONNECTION)
    private readonly connection: Connection,
    private readonly resumeRepo: ResumeRepository,
    private readonly resumeParserRepo: ResumeParserRepository,
    private readonly txResumeParserClient: TxResumeParserClient,
    private readonly fileHelper: FileHelper,
  ) {}

  async parseResume(id: Types.ObjectId): Promise<void> {
    const resume = await this.resumeRepo.findOne({
      _id: id,
      parseStatus: ParseStatus.NOT_YET,
    });
    if (!resume) return;
    await this.tryToParseResume(resume);
  }

  private async tryToParseResume(resume: ResumeDocument): Promise<void> {
    await this.resumeRepo.updateOneById(resume._id, {
      parseStatus: ParseStatus.PARSING,
    });
    try {
      const file = this.fileHelper.read(resume.storage.location);
      const parserResponse = await this.executeParserRequest(file);
      return await this.updateResumeParser(
        resume._id,
        parserResponse.data.Value,
      );
    } catch (err) {
      await this.resumeRepo.updateOneById(resume._id, {
        parseStatus: ParseStatus.FAILED,
      });
      throw err;
    }
  }

  private async updateResumeParser(
    resumeId: Types.ObjectId,
    resumeParsing: ResumeParsingTransaction,
  ): Promise<void> {
    const { ResumeData, RedactedResumeData } = resumeParsing;
    const resumeParserData: IResumeParserCreation = {
      resume: resumeId,
      ResumeData: ResumeData,
      RedactedResumeData: RedactedResumeData,
    };
    const session = await this.connection.startSession();
    session.startTransaction();
    try {
      await Promise.all([
        this.resumeParserRepo.create(resumeParserData),
        this.resumeRepo.updateOneById(resumeId, {
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

  private async executeParserRequest(
    resume: Buffer,
  ): TxClientResponse<ResumeParsingTransactionStructuredResponseModel> {
    const parserRequest: StructuredParseResumeRequest = {
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
    return this.txResumeParserClient.call(parserRequest);
  }
}
