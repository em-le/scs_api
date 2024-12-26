import {
  BadRequestException,
  Body,
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
  UploadZipFileParam,
} from 'src/internal/file/decorators/file.decorator';
import { IFile } from 'src/internal/file/interfaces/file.interface';
import { ResumeSerialization } from './serializations/resume.serialization';
import { plainToInstance } from 'class-transformer';
import { BookResumeParseUseCase } from 'src/domain/usecase/recruitment/book-parse-resume.usecase';
import { UploadResumeZipUseCase } from 'src/domain/usecase/recruitment/upload-resume-zip.usecase';
import { BookMultipleResumeParseUseCase } from 'src/domain/usecase/recruitment/book-multiple-parse-resume.usecase';

@Controller()
export class ResumeUploadController {
  constructor(
    private readonly getResumeUsecase: GetResumeUseCase,
    private readonly bookResumeParseUseCase: BookResumeParseUseCase,
    private readonly uploadResumeUseCase: UploadResumeUseCase,
    private readonly uploadResumeZipUseCase: UploadResumeZipUseCase,
    private readonly bookMultipleResumeParseUseCase: BookMultipleResumeParseUseCase,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  async getResume(@Param('id') id: string): Promise<ResumeSerialization> {
    const resume = await this.getResumeUsecase.execute(id._ObjectId());
    if (!resume) {
      throw new BadRequestException('The resume is not found');
    }

    return plainToInstance(ResumeSerialization, resume, {
      excludeExtraneousValues: true,
    });
  }

  @HttpCode(HttpStatus.OK)
  @Post('/:id/parser')
  async bookResumeParser(@Param('id') id: string): Promise<void> {
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
      return plainToInstance(ResumeSerialization, resume, {
        excludeExtraneousValues: true,
      });
    } catch (error) {
      throw new ServiceUnavailableException(error.message);
    }
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('/zip')
  @UploadFileSingle('file', 'resumes')
  async uploadZIP(@UploadZipFileParam() file: IFile): Promise<void> {
    await this.uploadResumeZipUseCase.execute(file);
  }

  @HttpCode(HttpStatus.OK)
  @Post('/parser')
  async bookResumesParse(@Body('ids') ids: string[]): Promise<void> {
    try {
      this.bookMultipleResumeParseUseCase.execute(
        ids.map((id) => id._ObjectId()),
      );
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }
}
