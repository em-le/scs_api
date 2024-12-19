import { Module } from '@nestjs/common';
import { HealthCheckRunner } from './heath-check.runner';

@Module({
  imports: [],
  providers: [HealthCheckRunner],
})
export class HealthRunnerModule {}
