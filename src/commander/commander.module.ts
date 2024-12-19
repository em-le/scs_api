import { Module } from '@nestjs/common';
import { InternalModule } from 'src/internal/internal.module';
import { HealthRunnerModule } from './commands/heath/heath-runner.module';
import { SeederRunnerModule } from './commands/seeder/seeder-runner.module';

const commandModules = [HealthRunnerModule, SeederRunnerModule];
@Module({
  imports: [InternalModule, ...commandModules],
  providers: [],
  exports: [],
})
export class CommanderModule {}
