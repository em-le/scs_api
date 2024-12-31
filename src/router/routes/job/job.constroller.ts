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
import { AnalyzeJobBimetricUseCase } from 'src/domain/usecase/recruitment/analyze-job-bimetric.usecase';
import { GetJobUseCase } from 'src/domain/usecase/recruitment/get-job.usecase';
import { UploadJobUseCase } from 'src/domain/usecase/recruitment/upload-job.usecase';
import {
  UploadFileSingle,
  UploadPDFFileParam,
} from 'src/internal/file/decorators/file.decorator';
import { IFile } from 'src/internal/file/interfaces/file.interface';
import { AnalyzeJobBimetricDto } from './dtos/analyze-job-bimetric.dto';
import { PagingResponse } from 'src/internal/response/decorators/paging-response.decorator';
import { PaginationQuery } from 'src/internal/pagination/decorators/pagination-query.decorator';
import { GetJobPaginationUseCase } from 'src/domain/usecase/recruitment/get-job-pagination.usecase';
import { JobPaginationDto } from './dtos/job-pagination.dto';
import { GetJobBimetricUseCase } from 'src/domain/usecase/recruitment/get-job-bimetric.usecase';

@Controller()
export class JobController {
  constructor(
    private readonly getJobPaginationUseCase: GetJobPaginationUseCase,
    private readonly uploadJobUseCase: UploadJobUseCase,
    private readonly getJobUseCase: GetJobUseCase,
    private readonly analyzeJobBimetricUseCase: AnalyzeJobBimetricUseCase,
    private readonly getJobBimetricUseCase: GetJobBimetricUseCase,
  ) {}

  @PagingResponse()
  @HttpCode(HttpStatus.OK)
  @Get()
  async getAll(@PaginationQuery() queries: JobPaginationDto) {
    try {
      return await this.getJobPaginationUseCase.execute(queries);
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('/pdf')
  @UploadFileSingle('file', 'jobs', {
    isPublic: false,
  })
  async parseJob(@UploadPDFFileParam() file: IFile): Promise<any> {
    try {
      await this.uploadJobUseCase.execute(file);
    } catch (err) {
      throw new ServiceUnavailableException(err.message);
    }
  }

  @HttpCode(HttpStatus.OK)
  @Get('/:id/')
  async getJob(@Param('id') id: string) {
    try {
      return await this.getJobUseCase.execute(id._ObjectId());
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  @HttpCode(HttpStatus.OK)
  @Get('/:id/bimetric')
  async getBimetric(@Param('id') id: string) {
    try {
      return await this.getJobBimetricUseCase.execute(id._ObjectId());
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  @HttpCode(HttpStatus.OK)
  @Post('/:id/bimetric')
  async analyzeBimetric(
    @Param('id') id: string,
    @Body() data: AnalyzeJobBimetricDto,
  ) {
    try {
      return await this.analyzeJobBimetricUseCase.execute(
        id._ObjectId(),
        data.ids.map((id) => id._ObjectId()),
      );
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }
}
