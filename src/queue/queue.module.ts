import { Module } from '@nestjs/common';
import { BullModule, BullRootModuleOptions } from '@nestjs/bull';
import { ConfigService } from 'src/internal/config/services/config.service';

const queues = [];
@Module({
  imports: [
    BullModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configSer: ConfigService): BullRootModuleOptions => {
        const { host, port, password, db } = configSer.queueConfig;
        return {
          redis: {
            host,
            port,
            password,
            db,
          },
          defaultJobOptions: {
            attempts: 5,
            backoff: {
              type: 'exponential',
              delay: 1000,
            },
          },
        };
      },
    }),
    ...queues,
  ],
})
export class QueueModule {}
