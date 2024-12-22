import { Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UploadResumeUseCase } from 'src/domain/usecase/recruitment/upload-resume.usecase';
import {
  UploadFileSingle,
  UploadPDFFileParam,
} from 'src/internal/file/decorators/file.decorator';
import { IFile } from 'src/internal/file/interfaces/file.interface';

@Controller()
export class ResumeUploadController {
  constructor(private readonly uploadResumeUseCase: UploadResumeUseCase) {}

  @UploadFileSingle('file', 'resumes')
  @HttpCode(HttpStatus.CREATED)
  @Post('/pdf')
  async uploadPDF(@UploadPDFFileParam() file: IFile) {
    return this.uploadResumeUseCase.execute(file);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('/zip')
  async uploadZIP(): Promise<void> {
    return;
  }
}
