import { Module } from '@nestjs/common';
import { SeederRunnerModule } from './commands/seeder/seeder-runner.module';
import { InternalModule } from 'src/internal/internal.module';
import { HealthCheckRunner } from './commands/heath-check.runner';
import { SchedulerModule } from 'src/scheduler/scheduler.module';
import { QueueModule } from 'src/queue/queue.module';
const commandModules = [SeederRunnerModule];

@Module({
  imports: [
    InternalModule,
    SchedulerModule.forRoot(),
    QueueModule,
    ...commandModules,
  ],
  providers: [HealthCheckRunner],
  exports: [],
})
export class CommanderModule {}
