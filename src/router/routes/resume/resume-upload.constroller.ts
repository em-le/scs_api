import {
  BadRequestException,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  ServiceUnavailableException,
} from '@nestjs/common';
import { UploadResumeUseCase } from 'src/domain/usecase/recruitment/upload-resume.usecase';
import { GetResumeUseCase } from 'src/domain/usecase/recruitment/get-resume.usecase';
import {
  UploadFileSingle,
  UploadPDFFileParam,
} from 'src/internal/file/decorators/file.decorator';
import { IFile } from 'src/internal/file/interfaces/file.interface';
import { ResumeSerialization } from './serializations/resume.serialization';
import { plainToInstance } from 'class-transformer';
import { BookResumeParseUseCase } from 'src/domain/usecase/recruitment/book-parse-resume.usecase';

@Controller()
export class ResumeUploadController {
  constructor(
    private readonly getResumeUsecase: GetResumeUseCase,
    private readonly bookResumeParseUseCase: BookResumeParseUseCase,
    private readonly uploadResumeUseCase: UploadResumeUseCase,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  async getResume(@Param('id') id: string): Promise<ResumeSerialization> {
    const resume = await this.getResumeUsecase.execute(id._ObjectId());
    if (!resume) {
      throw new BadRequestException('The resume is not found');
    }

    return plainToInstance(ResumeSerialization, resume);
  }

  @HttpCode(HttpStatus.OK)
  @Post('/:id/parser')
  async bookresumeParser(@Param('id') id: string): Promise<void> {
    try {
      this.bookResumeParseUseCase.execute(id._ObjectId());
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  @UploadFileSingle('file', 'resumes')
  @HttpCode(HttpStatus.CREATED)
  @Post('/pdf')
  async uploadPDF(
    @UploadPDFFileParam() file: IFile,
  ): Promise<ResumeSerialization> {
    try {
      const resume = await this.uploadResumeUseCase.execute(file);
      return plainToInstance(ResumeSerialization, resume);
    } catch (error) {
      throw new ServiceUnavailableException(error.message);
    }
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('/zip')
  async uploadZIP(): Promise<void> {
    return;
  }
}
