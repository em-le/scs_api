import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { MongooseRepositoryAbstract } from 'src/internal/database/abstracts/repository.abstract';
import { MongooseModel } from 'src/internal/database/decorators/database.decorator';
import { Queue, QueueDocument } from './schemas/queue.schema';
import { QUEUE_STATUS } from './schemas/queue.constant';

@Injectable()
export class QueueRepository extends MongooseRepositoryAbstract<QueueDocument> {
  constructor(
    @MongooseModel(Queue.name)
    private readonly userModel: Model<QueueDocument>,
  ) {
    super(userModel);
  }

  /**
   * Update the execute status of the queue
   * @param {Number} queueId
   * @return {Promise<void>}
   */
  async updateExecuteQueue(
    _id: Types.ObjectId,
    data: {
      jobId: number;
      failedReason?: string;
    },
  ): Promise<void> {
    await this.updateOneById(_id, {
      failedReason: data?.failedReason ?? null,
      jobId: data.jobId,
      status: QUEUE_STATUS.EXECUTED,
    });
  }
}
