import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { PRIMARY_CONNECTION } from 'src/internal/database/constants';
import { UserCollectionName, User, UserSchema } from './schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: User.name,
          schema: UserSchema,
          collection: UserCollectionName,
        },
      ],
      PRIMARY_CONNECTION,
    ),
  ],
  providers: [UserRepository],
  exports: [UserRepository],
})
export class UserRepositoryModule {}
