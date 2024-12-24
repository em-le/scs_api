import { Module } from '@nestjs/common';
import { ParseController } from './parse.controller';
import { TextKernelModule } from 'src/infra/textkernel/textkernel.module';
import { TxResumeParserClient } from 'src/infra/textkernel/clients/parser/resume-parser.client';
import { RecruitmentRepositoryModule } from 'src/infra/repository/recruitment/recruitment-repository.module';

@Module({
  imports: [TextKernelModule, RecruitmentRepositoryModule],
  controllers: [ParseController],
  providers: [TxResumeParserClient],
})
export class ParseModule {}
