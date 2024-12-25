import { Module } from '@nestjs/common';
import { JobUploadController } from './job-upload.controller';
import { TextKernelModule } from 'src/infra/textkernel/textkernel.module';
import { RecruitmentRepositoryModule } from 'src/infra/repository/recruitment/recruitment-repository.module';

@Module({
  imports: [TextKernelModule, RecruitmentRepositoryModule],
  controllers: [JobUploadController],
})
export class JobRouteModule {}
