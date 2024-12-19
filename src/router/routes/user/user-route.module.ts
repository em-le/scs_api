import { Module } from '@nestjs/common';
import { UserController } from './user.constroller';
import { UserUsecaseModule } from 'src/domain/usecase/user/user-usecase.module';

@Module({
  imports: [UserUsecaseModule],
  controllers: [UserController],
})
export class UserRouteModule {}
