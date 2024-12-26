import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { MongooseRepositoryAbstract } from 'src/internal/database/abstracts/repository.abstract';
import { MongooseModel } from 'src/internal/database/decorators/database.decorator';
import { Job, JobDocument } from './schemas/job.schema';

@Injectable()
export class JobRepository extends MongooseRepositoryAbstract<JobDocument> {
  constructor(
    @MongooseModel(Job.name)
    private readonly jobModel: Model<JobDocument>,
  ) {
    super(jobModel);
  }

  //
}
