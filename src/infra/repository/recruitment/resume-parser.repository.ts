import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { MongooseRepositoryAbstract } from 'src/internal/database/abstracts/repository.abstract';
import {
  ResumeParser,
  ResumeParserDocument,
} from './schemas/resume-parser.schema';
import { MongooseModel } from 'src/internal/database/decorators/database.decorator';

@Injectable()
export class ResumeParserRepository extends MongooseRepositoryAbstract<ResumeParserDocument> {
  constructor(
    @MongooseModel(ResumeParser.name)
    private readonly resumeParserModel: Model<ResumeParserDocument>,
  ) {
    super(resumeParserModel);
  }

  //
}
