import { Module } from '@nestjs/common';
import { ResumeUploadController } from './resume-upload.constroller';
import { RecruitmentUsecaseModule } from 'src/domain/usecase/recruitment/recruitment-usecase.module';

@Module({
  imports: [RecruitmentUsecaseModule],
  controllers: [ResumeUploadController],
})
export class ResumeRouteModule {}
