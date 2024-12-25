import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';

import { AbstractQueueProducer } from 'src/queue/abstracts/queue-producer.abstract';
import { QueueRepository } from 'src/infra/repository/queue/queue.repository';
import { QUEUE_SERVICE_TYPE } from 'src/infra/repository/queue/schemas/queue.constant';
import { PARSER_QUEUE_CONSUMER, PARSER_QUEUE_NAME } from './parser.constant';

@Injectable()
export class ParserProducer extends AbstractQueueProducer {
  constructor(
    @InjectQueue(PARSER_QUEUE_NAME)
    protected queue: Queue,
    protected queueRepo: QueueRepository,
  ) {
    super(queue, queueRepo);
  }

  async dispatchParseResume(data: { id: string }): Promise<void> {
    return await this.dispatch(
      PARSER_QUEUE_CONSUMER.PARSER_RESUME,
      data,
      QUEUE_SERVICE_TYPE.PARSER,
    );
  }
}
