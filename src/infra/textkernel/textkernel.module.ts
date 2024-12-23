import { Module } from '@nestjs/common';
import { TxAccountClient } from './clients/account/account.client';
import { TxResumeParserClient } from './clients/parser/resume-parser.client';
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
