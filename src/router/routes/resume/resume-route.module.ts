import { Module } from '@nestjs/common';
import { ResumeController } from './resume.constroller';
import { RecruitmentUsecaseModule } from 'src/domain/usecase/recruitment/recruitment-usecase.module';

@Module({
  imports: [RecruitmentUsecaseModule],
  controllers: [ResumeController],
})
export class ResumeRouteModule {}
