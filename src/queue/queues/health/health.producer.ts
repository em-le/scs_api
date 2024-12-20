import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';

import {
  HEATH_CHECK_QUEUE_CONSUMER,
  HEATH_CHECK_QUEUE_NAME,
} from './health.constant';
import { AbstractQueueProducer } from 'src/queue/abstracts/queue-producer.abstract';
import { QueueRepository } from 'src/infra/repository/queue/queue.repository';
import { QUEUE_SERVICE_TYPE } from 'src/infra/repository/queue/schemas/queue.constant';

@Injectable()
export class HealthProducer extends AbstractQueueProducer {
  constructor(
    @InjectQueue(HEATH_CHECK_QUEUE_NAME)
    protected queue: Queue,
    protected queueRepo: QueueRepository,
  ) {
    super(queue, queueRepo);
  }

  async dispatchHeathCheck(data: { message: string }): Promise<void> {
    return await this.dispatch(
      HEATH_CHECK_QUEUE_CONSUMER.HEATH,
      data,
      QUEUE_SERVICE_TYPE.HEALTH_CHECK,
    );
  }
}
