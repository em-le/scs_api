import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { PARSER_QUEUE_NAME } from './parser.constant';
import { QueueRepositoryModule } from 'src/infra/repository/queue/queue-repository.module';
import { ParserConsumer } from './parser.consumer';
import { ParserProducer } from './parser.producer';
import { RecruitmentServiceModule } from 'src/domain/service/recruitment/recruitment-service.module';

@Module({
  imports: [
    BullModule.registerQueue({
      name: PARSER_QUEUE_NAME,
    }),
    QueueRepositoryModule,
    RecruitmentServiceModule,
  ],
  providers: [ParserProducer, ParserConsumer],
  exports: [ParserProducer],
})
export class ParserQueueModule {}
