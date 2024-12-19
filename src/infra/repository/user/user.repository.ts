import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { MongooseRepositoryAbstract } from 'src/internal/database/abstracts/repository.abstract';
import { UserDocument, User } from './schemas/user.schema';
import { MongooseModel } from 'src/internal/database/decorators/database.decorator';

@Injectable()
export class UserRepository extends MongooseRepositoryAbstract<UserDocument> {
  constructor(
    @MongooseModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {
    super(userModel);
  }

  //
}
