import { Injectable } from '@nestjs/common';
import { Types } from 'mongoose';
import { ParseStatus } from 'src/infra/repository/recruitment/constants';
import { JobParserRepository } from 'src/infra/repository/recruitment/job-parser.repository';
import { JobRepository } from 'src/infra/repository/recruitment/job.repository';
import { JobDocument } from 'src/infra/repository/recruitment/schemas/job.schema';

@Injectable()
export class GetJobAggregateUseCase {
  constructor(
    private readonly jobRepo: JobRepository,
    private readonly jobParserRepo: JobParserRepository,
  ) {}

  async execute(id: Types.ObjectId) {
    const job = await this.jobRepo.findOneById(id, {
      populate: true,
    });
    if (!job) throw new Error('The job is not found');

    return this.getJobAggregate(job);
  }

  async getJobAggregate(job: JobDocument) {
    if (job.parseStatus != ParseStatus.PARSED) {
      return { job: job, jobParser: null };
    }
    const jobParser = await this.jobParserRepo.findOne({
      job: job._id,
    });
    return {
      job: job,
      jobParser: jobParser,
    };
  }
}
