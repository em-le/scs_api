import { Module } from '@nestjs/common';
import { TxAccountClient } from './clients/account/account.client';
import { TxResumeParserClient } from './clients/parsers/resume-parser.client';
import { TxResumeMatcherClient } from './clients/matcher/resume-matcher.client';
import { TxJobParserClient } from './clients/parsers/job-parser.client';

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
