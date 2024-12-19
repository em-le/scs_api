import { Module } from '@nestjs/common';
import { CreateUserUseCase } from './create-user.usecase';
import { UserRepositoryModule } from 'src/infra/repository/user/user-repository.module';

@Module({
  imports: [UserRepositoryModule],
  providers: [CreateUserUseCase],
  exports: [CreateUserUseCase],
})
export class UserUsecaseModule {}
