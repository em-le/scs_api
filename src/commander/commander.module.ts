import { Module } from '@nestjs/common';
import { SeederRunnerModule } from './commands/seeder/seeder-runner.module';
import { InternalModule } from 'src/internal/internal.module';
import { HealthCheckRunner } from './commands/heath-check.runner';
const commandModules = [SeederRunnerModule];

@Module({
  imports: [InternalModule, ...commandModules],
  providers: [HealthCheckRunner],
  exports: [],
})
export class CommanderModule {}
