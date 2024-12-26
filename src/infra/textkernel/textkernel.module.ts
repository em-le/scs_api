import { Module } from '@nestjs/common';
import { TxAccountClient } from './clients/account/account.client';
import { TxResumeMatcherClient } from './clients/matcher/resume-matcher.client';
import { TxResumeParserClient } from './clients/parser/resume-parser.client';
import { TxJobParserClient } from './clients/parser/job-parser.client';
import { TxResumeBimetricClient } from './clients/scorer/resume-bimetric.client';
import { TxJobBimetricClient } from './clients/scorer/job-bimetric.client';

const txClients = [
  TxAccountClient,
  TxResumeParserClient,
  TxJobParserClient,
  TxResumeMatcherClient,
  TxResumeBimetricClient,
  TxJobBimetricClient,
];
@Module({
  providers: txClients,
  exports: txClients,
})
export class TextKernelModule {}
