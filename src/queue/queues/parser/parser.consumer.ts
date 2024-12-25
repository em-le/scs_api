import { Process, Processor } from '@nestjs/bull';
import { Scope } from '@nestjs/common';
import { PARSER_QUEUE_CONSUMER, PARSER_QUEUE_NAME } from './parser.constant';
import { AbstractQueueConsumer } from 'src/queue/abstracts/queue-consumer.abstract';
import { QueueRepository } from 'src/infra/repository/queue/queue.repository';
import { LoggerService } from 'src/internal/logger/services/logger.service';
import { BullData } from 'src/queue/abstracts/queue.interface';
import { ResumePaserService } from 'src/domain/service/recruitment/resume-parser.service';

@Processor({
  name: PARSER_QUEUE_NAME,
  scope: Scope.REQUEST,
})
export class ParserConsumer extends AbstractQueueConsumer {
  constructor(
    protected readonly queueRepo: QueueRepository,
    protected readonly loggerSer: LoggerService,
    private readonly resumePaserSer: ResumePaserService,
  ) {
    super(queueRepo);
  }

  @Process({
    name: PARSER_QUEUE_CONSUMER.PARSER_RESUME,
  })
  async runHeath(bullData: BullData<{ id: string }>): Promise<void> {
    const { id } = bullData.data;
    this.resumePaserSer.parseResume(id._ObjectId());
  }
}
