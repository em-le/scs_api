import { Module } from '@nestjs/common';
import { JobController } from './job.constroller';
import { RecruitmentUsecaseModule } from 'src/domain/usecase/recruitment/recruitment-usecase.module';

@Module({
  imports: [RecruitmentUsecaseModule],
  controllers: [JobController],
})
export class JobRouteModule {}
