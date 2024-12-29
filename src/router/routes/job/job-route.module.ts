import { Module } from '@nestjs/common';
import { JobController } from './job.constroller';
import { RecruitmentUsecaseModule } from 'src/domain/usecase/recruitment/recruitment-usecase.module';
import { RecruitmentRepositoryModule } from 'src/infra/repository/recruitment/recruitment-repository.module';
import { TextKernelModule } from 'src/infra/textkernel/textkernel.module';

@Module({
  imports: [
    RecruitmentUsecaseModule,
    TextKernelModule,
    RecruitmentRepositoryModule,
  ],
  controllers: [JobController],
})
export class JobRouteModule {}
