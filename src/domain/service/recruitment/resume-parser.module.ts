import { Module } from '@nestjs/common';
import { ResumePaserService } from './resume-parser.service';
import { RecruitmentRepositoryModule } from 'src/infra/repository/recruitment/recruitment-repository.module';
import { TextKernelModule } from 'src/infra/textkernel/textkernel.module';

const services = [ResumePaserService];
@Module({
  imports: [RecruitmentRepositoryModule, TextKernelModule],
  providers: services,
  exports: services,
})
export class RecruitmentServiceModule {}
