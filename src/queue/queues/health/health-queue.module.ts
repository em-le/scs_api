import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';

import { HEATH_CHECK_QUEUE_NAME } from './health.constant';
import { HealthConsumer } from './health.consumer';
import { HealthProducer } from './health.producer';
import { QueueRepositoryModule } from 'src/infra/repository/queue/queue-repository.module';

@Module({
  imports: [
    BullModule.registerQueue({
      name: HEATH_CHECK_QUEUE_NAME,
    }),
    QueueRepositoryModule,
  ],
  providers: [HealthProducer, HealthConsumer],
  exports: [HealthProducer],
})
export class HeathQueueModule {}
