import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JobParserRepository } from 'src/infra/repository/recruitment/job-parser.repository';
import { TxJobParserClient } from 'src/infra/textkernel/clients/parser/job-parser.client';
import { StructuredParseJobOrderRequest } from 'src/infra/textkernel/openapi/data-contracts';

@Controller()
export class JobUploadController {
  constructor(
    private readonly txJobParserClient: TxJobParserClient,
    private readonly jobParserRepository: JobParserRepository,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('/parser')
  @UseInterceptors(FileInterceptor('file'))
  async parseJob(@UploadedFile() file: Express.Multer.File): Promise<any> {
    const base64File = file.buffer.toString('base64');
    const data: StructuredParseJobOrderRequest = {
      DocumentAsBase64String: base64File,
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
    const job = await this.txJobParserClient.call(data);
    if (job?.data?.Value?.JobData) {
      const jobData = {
        JobData: job.data.Value.JobData,
      };
      return await this.jobParserRepository.create(jobData);
    } else {
      throw new Error('Failed to parse job');
    }
  }
}
