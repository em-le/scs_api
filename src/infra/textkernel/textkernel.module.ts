import { Module } from '@nestjs/common';
import { TxAccountClient } from './clients/account/account.client';
import { TxResumeMatcherClient } from './clients/matcher/resume-matcher.client';
import { TxResumeParserClient } from './clients/parser/resume-parser.client';
import { TxJobParserClient } from './clients/parser/job-parser.client';

const txClients = [
  TxAccountClient,
  TxResumeParserClient,
  TxJobParserClient,
  TxResumeMatcherClient,
];
@Module({
  providers: txClients,
  exports: txClients,
})
export class TextKernelModule {}
