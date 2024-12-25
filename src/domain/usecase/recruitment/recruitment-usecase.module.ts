import { Module } from '@nestjs/common';
import { CreateRecruitmentUseCase } from './create-recruitment.usecase';
import { RecruitmentRepositoryModule } from 'src/infra/repository/recruitment/recruitment-repository.module';
import { GetRecruitmentUseCase } from './get-recruitment.usecase';
import { UpdateRecruitmentUseCase } from './update-recruitment.usecase';
import { UploadResumeUseCase } from './upload-resume.usecase';
import { GetResumeUseCase } from './get-resume.usecase';
import { BookResumeParseUseCase } from './book-parse-resume.usecase';
import { ParserQueueModule } from 'src/queue/queues/parser/parser-queue.module';
const usecases = [
  GetRecruitmentUseCase,
  CreateRecruitmentUseCase,
  UpdateRecruitmentUseCase,
  GetResumeUseCase,
  UploadResumeUseCase,
  BookResumeParseUseCase,
];
@Module({
  imports: [RecruitmentRepositoryModule, ParserQueueModule],
  providers: [...usecases],
  exports: [...usecases],
})
export class RecruitmentUsecaseModule {}
