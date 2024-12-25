import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { JobParserRepository } from 'src/infra/repository/recruitment/job-parser.repository';
import { ResumeParserRepository } from 'src/infra/repository/recruitment/resume-parser.repository';
import { TxJobParserClient } from 'src/infra/textkernel/clients/parser/job-parser.client';
import { TxResumeParserClient } from 'src/infra/textkernel/clients/parser/resume-parser.client';
import {
  StructuredParseJobOrderRequest,
  StructuredParseResumeRequest,
} from 'src/infra/textkernel/openapi/data-contracts';

@Controller()
export class ParseController {
  constructor(
    private readonly txResumeParserClient: TxResumeParserClient,
    private readonly txJobParserClient: TxJobParserClient,
    private readonly resumeParserRepository: ResumeParserRepository,
    private readonly jobParserRepository: JobParserRepository,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('/job')
  @UseInterceptors(FileInterceptor('file'))
  async parseJob(@UploadedFile() file: Express.Multer.File): Promise<any> {
    const base64File = file.buffer.toString('base64');
    const data: StructuredParseJobOrderRequest = {
      DocumentAsBase64String: base64File,
      DocumentLastModified: new Date().toISOString().split('T')[0],
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

  @HttpCode(HttpStatus.OK)
  @Post('/resumes')
  @UseInterceptors(FilesInterceptor('files'))
  async parseResumes(
    @UploadedFiles() files: Express.Multer.File[],
  ): Promise<any> {
    const base64Files = files.map((file) => file.buffer.toString('base64'));
    const data: StructuredParseResumeRequest[] = base64Files.map(
      (base64File) => ({
        DocumentAsBase64String: base64File,
        DocumentLastModified: new Date().toISOString().split('T')[0],
        ProfessionsSettings: {
          Normalize: true,
          Version: {
            ONET: '2019',
          },
        },
      }),
    );
    return await Promise.all(
      data.map((d) => this.txResumeParserClient.call(d)),
    );
  }

  @HttpCode(HttpStatus.OK)
  @Post('/resume')
  @UseInterceptors(FileInterceptor('file'))
  async parseResume(@UploadedFile() file: Express.Multer.File): Promise<any> {
    const base64File = file.buffer.toString('base64');
    const data: StructuredParseResumeRequest = {
      DocumentAsBase64String: base64File,
      DocumentLastModified: new Date().toISOString().split('T')[0],
      ProfessionsSettings: {
        Normalize: true,
        Version: {
          ONET: '2019',
        },
      },
    };
    const resume = await this.txResumeParserClient.call(data);
    if (resume?.data?.Value?.ResumeData) {
      const resumeData = {
        ResumeData: resume.data.Value.ResumeData,
      };
      return await this.resumeParserRepository.create(resumeData);
    } else {
      throw new Error('Failed to parse resume');
    }
  }
}
