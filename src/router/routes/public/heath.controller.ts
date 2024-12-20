import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { HealthProducer } from 'src/queue/queues/health/health.producer';

@Controller({
  path: 'health',
})
export class HealthController {
  constructor(private readonly healthProducer: HealthProducer) {}

  @HttpCode(HttpStatus.OK)
  @Get('/')
  async check() {
    this.healthProducer.dispatchHeathCheck({ message: 'Health' });
    return 'OK';
  }
}
