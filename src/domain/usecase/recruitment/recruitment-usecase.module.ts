import { Module } from '@nestjs/common';
import { CreateRecruitmentUseCase } from './create-recruitment.usecase';
import { RecruitmentRepositoryModule } from 'src/infra/repository/recruitment/recruitment-repository.module';
import { GetRecruitmentUseCase } from './get-recruitment.usecase';
import { UpdateRecruitmentUseCase } from './update-recruitment.usecase';
import { UploadResumeUseCase } from './upload-resume.usecase';
const usecases = [
  GetRecruitmentUseCase,
  CreateRecruitmentUseCase,
  UpdateRecruitmentUseCase,
  UploadResumeUseCase,
];
@Module({
  imports: [RecruitmentRepositoryModule],
  providers: [...usecases],
  exports: [...usecases],
})
export class RecruitmentUsecaseModule {}
