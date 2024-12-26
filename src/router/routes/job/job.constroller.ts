import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  ServiceUnavailableException,
} from '@nestjs/common';
import { UploadJobUseCase } from 'src/domain/usecase/recruitment/upload-job.usecase';
import {
  UploadFileSingle,
  UploadPDFFileParam,
} from 'src/internal/file/decorators/file.decorator';
import { IFile } from 'src/internal/file/interfaces/file.interface';

@Controller()
export class JobController {
  constructor(private readonly uploadJobUseCase: UploadJobUseCase) {}

  @HttpCode(HttpStatus.OK)
  @Post('/pdf')
  @UploadFileSingle('file', 'jobs')
  async parseJob(@UploadPDFFileParam() file: IFile): Promise<any> {
    try {
      await this.uploadJobUseCase.execute(file);
    } catch (err) {
      throw new ServiceUnavailableException(err.message);
    }
  }
}
