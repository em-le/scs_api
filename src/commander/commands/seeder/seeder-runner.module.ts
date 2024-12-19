import { Module } from '@nestjs/common';
import { SeederRunner } from './seeder.runner';
import { seeds } from './seeds';
import { UserRepositoryModule } from 'src/domain/user/repositories/user-repository.module';

@Module({
  imports: [UserRepositoryModule],
  providers: [SeederRunner, ...seeds],
  exports: [SeederRunner],
})
export class SeederRunnerModule {}
