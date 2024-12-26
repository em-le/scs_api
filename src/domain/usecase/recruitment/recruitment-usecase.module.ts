import { Module } from '@nestjs/common';
import { CreateRecruitmentUseCase } from './create-recruitment.usecase';
import { RecruitmentRepositoryModule } from 'src/infra/repository/recruitment/recruitment-repository.module';
import { GetRecruitmentUseCase } from './get-recruitment.usecase';
import { UpdateRecruitmentUseCase } from './update-recruitment.usecase';
import { UploadResumeUseCase } from './upload-resume.usecase';
import { GetResumeUseCase } from './get-resume.usecase';
import { BookResumeParseUseCase } from './book-parse-resume.usecase';
import { ParserQueueModule } from 'src/queue/queues/parser/parser-queue.module';
import { UploadResumeZipUseCase } from './upload-resume-zip.usecase';
import { BookMultipleResumeParseUseCase } from './book-multiple-parse-resume.usecase';
import { UploadJobUseCase } from './upload-job.usecase';
import { RecruitmentServiceModule } from 'src/domain/service/recruitment/recruitment-service.module';
const usecases = [
  GetRecruitmentUseCase,
  CreateRecruitmentUseCase,
  UpdateRecruitmentUseCase,
  GetResumeUseCase,
  UploadResumeUseCase,
  BookResumeParseUseCase,
  UploadResumeZipUseCase,
  BookMultipleResumeParseUseCase,
  UploadJobUseCase,
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
