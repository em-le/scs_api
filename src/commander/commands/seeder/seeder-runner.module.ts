import { Module } from '@nestjs/common';
import { SeederRunner } from './seeder.runner';
import { seeds } from './seeds';
import { UserUsecaseModule } from 'src/domain/usecase/user/user-usecase.module';

@Module({
  imports: [UserUsecaseModule],
  providers: [SeederRunner, ...seeds],
  exports: [SeederRunner],
})
export class SeederRunnerModule {}
