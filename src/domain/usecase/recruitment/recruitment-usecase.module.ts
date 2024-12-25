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
import { BookMutilpleResumeParseUseCase } from './book-multiple-parse-resume.usecase';
const usecases = [
  GetRecruitmentUseCase,
  CreateRecruitmentUseCase,
  UpdateRecruitmentUseCase,
  GetResumeUseCase,
  UploadResumeUseCase,
  BookResumeParseUseCase,
  UploadResumeZipUseCase,
  BookMutilpleResumeParseUseCase,
];
@Module({
  imports: [RecruitmentRepositoryModule, ParserQueueModule],
  providers: [...usecases],
  exports: [...usecases],
})
export class RecruitmentUsecaseModule {}
