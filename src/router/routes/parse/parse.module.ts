import { Module } from '@nestjs/common';
import { ParseController } from './parse.controller';
import { TextKernelModule } from 'src/infra/textkernel/textkernel.module';
import { TxResumeParserClient } from 'src/infra/textkernel/clients/parsers/resume-parser.client';

@Module({
  imports: [TextKernelModule],
  controllers: [ParseController],
  providers: [TxResumeParserClient],
})
export class ParseModule {}
