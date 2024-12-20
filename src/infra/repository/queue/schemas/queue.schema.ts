import { BaseDBAbstractSchema } from 'src/internal/database/abstracts/schema.abstract';
import { IQueue } from './queue.interface';
import { MongooseSchema } from 'src/internal/database/decorators/database.decorator';
import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { QUEUE_SERVICE_TYPE, QUEUE_STATUS } from './queue.constant';

export const QueueCollectionName = 'queues';
@MongooseSchema(QueueCollectionName)
export class Queue extends BaseDBAbstractSchema implements IQueue {
  @Prop({
    type: Number,
    required: false,
    default: null,
  })
  jobId: number | null;

  @Prop({
    type: String,
    required: true,
  })
  serviceType: QUEUE_SERVICE_TYPE;

  @Prop({
    type: String,
    required: true,
  })
  data: string;

  @Prop({
    type: String,
    required: true,
  })
  status: QUEUE_STATUS;

  @Prop({
    type: String,
    required: false,
    default: null,
  })
  failedReason: string | null;
}

export const QueueSchema = SchemaFactory.createForClass(Queue);
export type QueueDocument = HydratedDocument<Queue>;
