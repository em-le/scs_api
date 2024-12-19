import { Module } from '@nestjs/common';
import { UserController } from './user.constroller';
import { UserModule } from 'src/domain/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [UserController],
})
export class UserRouteModule {}
