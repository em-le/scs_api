import { Module } from '@nestjs/common';
import { ResumeParserService } from './resume-parser.service';
import { RecruitmentRepositoryModule } from 'src/infra/repository/recruitment/recruitment-repository.module';
import { TextKernelModule } from 'src/infra/textkernel/textkernel.module';
import { JobPaserService } from './job-parser.service';

const services = [ResumeParserService, JobPaserService];
@Module({
  imports: [RecruitmentRepositoryModule, TextKernelModule],
  providers: services,
  exports: services,
})
export class RecruitmentServiceModule {}
