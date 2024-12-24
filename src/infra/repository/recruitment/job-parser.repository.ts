import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { MongooseRepositoryAbstract } from 'src/internal/database/abstracts/repository.abstract';
import { MongooseModel } from 'src/internal/database/decorators/database.decorator';
import { JobParser, JobParserDocument } from './schemas/job-parser.schema';

@Injectable()
export class JobParserRepository extends MongooseRepositoryAbstract<JobParserDocument> {
  constructor(
    @MongooseModel(JobParser.name)
    private readonly jobParserModel: Model<JobParserDocument>,
  ) {
    super(jobParserModel);
  }

  //
}
