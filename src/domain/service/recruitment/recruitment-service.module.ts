import { Module } from '@nestjs/common';
import { ResumeParserService } from './resume-parser.service';
import { RecruitmentRepositoryModule } from 'src/infra/repository/recruitment/recruitment-repository.module';
import { TextKernelModule } from 'src/infra/textkernel/textkernel.module';
import { JobParserService } from './job-parser.service';
import { JobBimetricService } from './job-bimetric.service';

const services = [ResumeParserService, JobParserService, JobBimetricService];
@Module({
  imports: [RecruitmentRepositoryModule, TextKernelModule],
  providers: services,
  exports: services,
})
export class RecruitmentServiceModule {}
