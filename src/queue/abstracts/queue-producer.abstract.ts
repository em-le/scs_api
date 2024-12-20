import { JobOptions, Queue } from 'bull';
import { QueueRepository } from 'src/infra/repository/queue/queue.repository';
import {
  QUEUE_SERVICE_TYPE,
  QUEUE_STATUS,
} from 'src/infra/repository/queue/schemas/queue.constant';

export abstract class AbstractQueueProducer {
  protected queue: Queue;
  protected queueRepo: QueueRepository;

  constructor(queue: Queue, queueRepo: QueueRepository) {
    this.queue = queue;
    this.queueRepo = queueRepo;
  }

  protected async dispatch(
    consumer: string,
    data: Record<string, any>,
    serviceType = QUEUE_SERVICE_TYPE.HEALTH_CHECK,
    opts?: JobOptions,
  ) {
    const queueDocument = await this.queueRepo.create({
      serviceType: serviceType,
      status: QUEUE_STATUS.DISPATCH,
      data: JSON.stringify(data),
    });

    await this.queue.add(
      consumer,
      { ...data, queueId: queueDocument._id },
      opts,
    );
  }
}
