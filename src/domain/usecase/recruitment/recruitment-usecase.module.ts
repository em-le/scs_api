import { Module } from '@nestjs/common';
import { RecruitmentRepositoryModule } from 'src/infra/repository/recruitment/recruitment-repository.module';
import { UploadResumeUseCase } from './upload-resume.usecase';
import { GetResumeUseCase } from './get-resume.usecase';
import { BookResumeParseUseCase } from './book-parse-resume.usecase';
import { ParserQueueModule } from 'src/queue/queues/parser/parser-queue.module';
import { UploadResumeZipUseCase } from './upload-resume-zip.usecase';
import { BookMultipleResumeParseUseCase } from './book-multiple-parse-resume.usecase';
import { UploadJobUseCase } from './upload-job.usecase';
import { RecruitmentServiceModule } from 'src/domain/service/recruitment/recruitment-service.module';
import { GetJobUseCase } from './get-job.usecase';
import { AnalyzeJobBimetricUseCase } from './analyze-job-bimetric.usecase';
import { GetResumePaginationUseCase } from './get-resume-pagination.usecase';
import { GetJobPaginationUseCase } from './get-job-pagination.usecase';
import { GetJobBimetricUseCase } from './get-job-bimetric.usecase';
const usecases = [
  GetResumeUseCase,
  UploadResumeUseCase,
  BookResumeParseUseCase,
  UploadResumeZipUseCase,
  BookMultipleResumeParseUseCase,
  UploadJobUseCase,
  GetJobUseCase,
  AnalyzeJobBimetricUseCase,
  GetResumePaginationUseCase,
  GetJobPaginationUseCase,
  GetJobBimetricUseCase,
];
@Module({
  imports: [
    RecruitmentRepositoryModule,
    ParserQueueModule,
    RecruitmentServiceModule,
  ],
  providers: [...usecases],
  exports: [...usecases],
})
export class RecruitmentUsecaseModule {}
