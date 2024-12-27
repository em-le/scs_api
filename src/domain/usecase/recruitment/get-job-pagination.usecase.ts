import { Injectable } from '@nestjs/common';
import { FilterQuery } from 'mongoose';
import { JobParserRepository } from 'src/infra/repository/recruitment/job-parser.repository';
import { JobRepository } from 'src/infra/repository/recruitment/job.repository';
import { JobParserDocument } from 'src/infra/repository/recruitment/schemas/job-parser.schema';
import { JobDocument } from 'src/infra/repository/recruitment/schemas/job.schema';
import { ResumeDocument } from 'src/infra/repository/recruitment/schemas/resume.schema';
import { IDBFindAllOptions } from 'src/internal/database/interfaces';
import { IFilterQueryOption } from 'src/internal/pagination/interfaces';
import { PagingService } from 'src/internal/pagination/services/paging.service';
import { JobPaginationDto } from 'src/router/routes/job/dtos/job-pagination.dto';
import { IJobAggregate } from './interfaces';

@Injectable()
export class GetJobPaginationUseCase {
  constructor(
    private readonly pagingSer: PagingService,
    private readonly jobRepo: JobRepository,
    private readonly jobParserRepo: JobParserRepository,
  ) {}

  async execute(paginationQuery: JobPaginationDto) {
    const { page, take } = paginationQuery;
    const filterQuery = this.getFilterQuery(paginationQuery);
    const findResult = await this.findAndCount(filterQuery);

    return this.pagingSer.transform<IJobAggregate>(findResult, {
      page,
      take,
    });
  }

  private async findAndCount(
    filterQuery: IFilterQueryOption<ResumeDocument>,
  ): Promise<[IJobAggregate[], number]> {
    const [jobs, count] = await Promise.all([
      this.jobRepo.findAll(filterQuery.find, filterQuery.options),
      this.jobRepo.getTotal(filterQuery.find, filterQuery.options),
    ]);
    if (!count) return [[], count];

    return [await this.findJobAggregate(jobs), count];
  }

  private async findJobAggregate(
    jobs: JobDocument[],
  ): Promise<IJobAggregate[]> {
    const jobIds = jobs.map((resume) => resume._id);

    const jobParsers = await this.jobParserRepo.findAll({
      job: { $in: jobIds },
    });

    const jobMap = {};
    jobParsers?.forEach((jobParser: JobParserDocument) => {
      jobMap[jobParser.job.toString()] = jobParser;
    });

    return jobs.map((job) => {
      return {
        job: job,
        jobParser: jobMap?.[job._id.toString()]
          ? jobMap[job._id.toString()]
          : null,
      };
    });
  }

  private getFilterQuery(
    paginationQuery: JobPaginationDto,
  ): IFilterQueryOption<JobDocument> {
    const { take, skip, tags, parseStatuses } = paginationQuery;
    const find: FilterQuery<JobDocument> = {};
    if (tags?.length) {
      find.tags = { $in: tags };
    }

    if (parseStatuses?.length) {
      find.parseStatus = { $in: parseStatuses };
    }

    const options: IDBFindAllOptions = {
      limit: take,
      skip: skip,
      sort: {
        createdAt: -1,
      },
    };
    return { find, options };
  }
}
