import { Module } from '@nestjs/common';
import { InternalModule } from './internal/internal.module';
import { RouterModule } from './router/router.module';
import { SchedulerModule } from './scheduler/scheduler.module';
import { QueueModule } from './queue/queue.module';

@Module({
  imports: [
    InternalModule,
    RouterModule.register(),
    SchedulerModule.forRoot(),
    QueueModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
