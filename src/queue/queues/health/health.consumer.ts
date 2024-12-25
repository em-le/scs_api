import { Scope } from '@nestjs/common';
import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { AbstractQueueConsumer } from 'src/queue/abstracts/queue-consumer.abstract';
import { QueueRepository } from 'src/infra/repository/queue/queue.repository';
import { LoggerService } from 'src/internal/logger/services/logger.service';
import {
  HEATH_CHECK_QUEUE_CONSUMER,
  HEATH_CHECK_QUEUE_NAME,
} from './health.constant';
import {
  IQueueData,
  IUpdateExecuteQueueOptions,
  BullData,
} from 'src/queue/abstracts/queue.interface';

export interface IHeathData {
  message: string;
}
@Processor({
  name: HEATH_CHECK_QUEUE_NAME,
  scope: Scope.REQUEST,
})
export class HealthConsumer extends AbstractQueueConsumer {
  constructor(
    protected readonly queueRepo: QueueRepository,
    protected readonly loggerSer: LoggerService,
  ) {
    super(queueRepo);
  }

  @Process({
    name: HEATH_CHECK_QUEUE_CONSUMER.HEATH,
  })
  async runHeath(job: BullData<IHeathData>): Promise<void> {
    return this.tryToCheckHeath(job);
  }

  private async tryToCheckHeath(
    job: Job<IQueueData<IHeathData>>,
  ): Promise<void> {
    const opstions: IUpdateExecuteQueueOptions = {};
    try {
      this.checkHeath(job.data);
    } catch (err) {
      this.loggerSer.error(
        {
          class: HealthConsumer.name,
          function: this.tryToCheckHeath.name,
          description: 'Queue Error: Heath Check Mail',
        },
        err,
      );
      opstions.failedReason = err?.message;
    } finally {
      await this.updateExecuteQueue(job, opstions);
    }
  }

  private checkHeath(data: IQueueData<IHeathData>) {
    console.log(`Run with: ${JSON.stringify(data)}`);
  }
}
