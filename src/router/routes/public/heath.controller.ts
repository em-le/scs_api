import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';

@Controller({
  path: 'health',
})
export class HealthController {
  @HttpCode(HttpStatus.OK)
  @Get('/')
  async check(): Promise<any> {
    return 'OK';
  }
}
