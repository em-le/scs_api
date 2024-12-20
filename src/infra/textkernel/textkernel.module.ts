import { Module } from '@nestjs/common';
import { TxResumeParserClient } from './clients/parsers/resume-parser.client';
import { TxAccountClient } from './clients/account/account.client';
import { TxResumeMatcherClient } from './clients/matcher/resueme-matcher.client';

const txClients = [
  TxAccountClient,
  TxResumeParserClient,
  TxResumeMatcherClient,
];
@Module({
  providers: txClients,
  exports: txClients,
})
export class TextKernelModule {}
