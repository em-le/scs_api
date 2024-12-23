import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { MongooseRepositoryAbstract } from 'src/internal/database/abstracts/repository.abstract';
import { MongooseModel } from 'src/internal/database/decorators/database.decorator';
import { Matcher, MatcherDocument } from './schemas/matcher.schema';

@Injectable()
export class MatcherRepository extends MongooseRepositoryAbstract<MatcherDocument> {
  constructor(
    @MongooseModel(Matcher.name)
    private readonly matcherModel: Model<MatcherDocument>,
  ) {
    super(matcherModel);
  }

  //
}
