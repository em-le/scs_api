import { Module } from '@nestjs/common';
import { UserUseCase } from './user.usecase';

@Module({
  imports: [],
  providers: [UserUseCase],
  exports: [UserUseCase],
})
export class UserModule {}
