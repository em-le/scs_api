import { Module } from '@nestjs/common';
import {
  Queue,
  QueueCollectionName,
  QueueSchema,
} from './schemas/queue.schema';
import { PRIMARY_CONNECTION } from 'src/internal/database/constants';
import { MongooseModule } from '@nestjs/mongoose';
import { QueueRepository } from './queue.repository';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: Queue.name,
          schema: QueueSchema,
          collection: QueueCollectionName,
        },
      ],
      PRIMARY_CONNECTION,
    ),
  ],
  providers: [QueueRepository],
  exports: [QueueRepository],
})
export class QueueRepositoryModule {}
