import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { MongooseRepositoryAbstract } from 'src/internal/database/abstracts/repository.abstract';
import { ParserDocument, Parser } from './schemas/Parser.schema';
import { MongooseModel } from 'src/internal/database/decorators/database.decorator';

@Injectable()
export class ParserRepository extends MongooseRepositoryAbstract<ParserDocument> {
  constructor(
    @MongooseModel(Parser.name)
    private readonly ParserModel: Model<ParserDocument>,
  ) {
    super(ParserModel);
  }

  //
}
