import { Job } from 'bull';
import { Types } from 'mongoose';
import { QueueRepository } from 'src/infra/repository/queue/queue.repository';
import { IUpdateExecuteQueueOptions } from './queue.interface';

export class AbstractQueueConsumer {
  protected queueRepo: QueueRepository;
  constructor(queueRepo: QueueRepository) {
    this.queueRepo = queueRepo;
  }

  protected async updateExecuteQueue(
    job: Job<{ queueId?: Types.ObjectId }>,
    options?: IUpdateExecuteQueueOptions,
  ): Promise<void> {
    const queueData = job.data;
    const queueId = queueData?.queueId;
    const jobId = job.id as number;

    if (queueId && jobId) {
      await this.queueRepo.updateExecuteQueue(queueId, {
        jobId: jobId,
        failedReason: options?.failedReason ?? void 0,
      });
    }
  }
}
