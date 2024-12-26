import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { MongooseRepositoryAbstract } from 'src/internal/database/abstracts/repository.abstract';
import { MongooseModel } from 'src/internal/database/decorators/database.decorator';
import {
  JobBimetrictMatch,
  JobBimetrictMatchDocument,
} from './schemas/job-bimetric-match.schema';

@Injectable()
export class JobBimetricMatchRepository extends MongooseRepositoryAbstract<JobBimetrictMatchDocument> {
  constructor(
    @MongooseModel(JobBimetrictMatch.name)
    private readonly jobBimetricMatchModel: Model<JobBimetrictMatchDocument>,
  ) {
    super(jobBimetricMatchModel);
  }

  //
}
