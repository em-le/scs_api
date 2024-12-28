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
import { PaginationQuery } from 'src/internal/pagination/decorators/pagination-query.decorator';
import { ResumePaginationDto } from './dtos/pagination.dto';
import { GetResumePaginationUseCase } from 'src/domain/usecase/recruitment/get-resume-pagination.usecase';
import { PagingResponse } from 'src/internal/response/decorators/paging-response.decorator';
import { ResumeDocument } from 'src/infra/repository/recruitment/schemas/resume.schema';

@Controller()
export class ResumeController {
  constructor(
    private readonly getResumePaginationUseCase: GetResumePaginationUseCase,
    private readonly getResumeUseCase: GetResumeUseCase,
    private readonly bookResumeParseUseCase: BookResumeParseUseCase,
    private readonly uploadResumeUseCase: UploadResumeUseCase,
    private readonly uploadResumeZipUseCase: UploadResumeZipUseCase,
    private readonly bookMultipleResumeParseUseCase: BookMultipleResumeParseUseCase,
  ) {}

  @PagingResponse()
  @HttpCode(HttpStatus.OK)
  @Get()
  async getAll(@PaginationQuery() queries: ResumePaginationDto) {
    try {
      return await this.getResumePaginationUseCase.execute(queries);
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  async getResume(@Param('id') id: string) {
    try {
      return await this.getResumeUseCase.execute(id._ObjectId());
    } catch (err) {
      throw new BadRequestException('The resume is not found');
    }
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

  @UploadFileSingle('file', 'resumes', {
    isPublic: false,
  })
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
  @UploadFileSingle('file', 'resumes', {
    isPublic: false,
  })
  async uploadZIP(
    @UploadZipFileParam() file: IFile,
  ): Promise<ResumeDocument[]> {
    return await this.uploadResumeZipUseCase.execute(file);
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
