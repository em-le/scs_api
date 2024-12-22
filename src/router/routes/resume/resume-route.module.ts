import { Module } from '@nestjs/common';
import { ResumeUploadController } from './resume-upload.constroller';

@Module({
  imports: [],
  controllers: [ResumeUploadController],
})
export class ResumeRouteModule {}
