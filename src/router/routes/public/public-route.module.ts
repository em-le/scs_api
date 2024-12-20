import { Module } from '@nestjs/common';
import { HealthController } from './heath.controller';
import { HeathQueueModule } from 'src/queue/queues/health/health-queue.module';

@Module({
  imports: [HeathQueueModule],
  controllers: [HealthController],
})
export class PublicRouteModule {}
