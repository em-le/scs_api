import { Module } from '@nestjs/common';
import { UserRepositoryModule } from 'src/infra/repository/user/user-repository.module';
import { SeederRunner } from './seeder.runner';
import { seeds } from './seeds';
import { UserUsecaseModule } from 'src/domain/usecase/user/user-usecase.module';

@Module({
  imports: [UserRepositoryModule, UserUsecaseModule],
  providers: [SeederRunner, ...seeds],
  exports: [SeederRunner],
})
export class SeederRunnerModule {}
