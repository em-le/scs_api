import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { TxAccountClient } from 'src/infra/textkernel/clients/account/account.client';

@Controller({
  path: 'health',
})
export class HealthController {
  constructor(private readonly txAccountClient: TxAccountClient) {}

  @HttpCode(HttpStatus.OK)
  @Get('/')
  async check(): Promise<any> {
    const clientResponse = await this.txAccountClient.call();
    return clientResponse.data;
  }
}
