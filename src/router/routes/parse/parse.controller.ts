import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { TxJobParserClient } from 'src/infra/textkernel/clients/parsers/job-parser.client';
import { TxResumeParserClient } from 'src/infra/textkernel/clients/parsers/resume-parser.client';
import {
  StructuredParseJobOrderRequest,
  StructuredParseResumeRequest,
} from 'src/infra/textkernel/openapi/data-contracts';

@Controller()
export class ParseController {
  constructor(
    private readonly txResumeParserClient: TxResumeParserClient,
    private readonly txJobParserClient: TxJobParserClient,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('/job')
  @UseInterceptors(FilesInterceptor('file'))
  async parseJob(@UploadedFile() file: Express.Multer.File): Promise<any> {
    const base64File = file.buffer.toString('base64');
    const data: StructuredParseJobOrderRequest = {
      DocumentAsBase64String: base64File,
      DocumentLastModified: new Date().toISOString(),
      ProfessionsSettings: {
        Normalize: true,
        Version: {
          ONET: '2019',
        },
      },
    };
    return await this.txJobParserClient.call(data);
  }

  @HttpCode(HttpStatus.OK)
  @Post('/resume')
  @UseInterceptors(FilesInterceptor('files'))
  async parseResume(
    @UploadedFiles() files: Express.Multer.File[],
  ): Promise<any> {
    const base64Files = files.map((file) => file.buffer.toString('base64'));
    const data: StructuredParseResumeRequest[] = base64Files.map(
      (base64File) => ({
        DocumentAsBase64String: base64File,
        DocumentLastModified: new Date().toISOString(),
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
}
