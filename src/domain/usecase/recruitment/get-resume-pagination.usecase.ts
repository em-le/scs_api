import { Injectable } from '@nestjs/common';
import { FilterQuery } from 'mongoose';
import { ResumeParserRepository } from 'src/infra/repository/recruitment/resume-parser.repository';
import { ResumeRepository } from 'src/infra/repository/recruitment/resume.repository';
import { ResumeParserDocument } from 'src/infra/repository/recruitment/schemas/resume-parser.schema';
import { ResumeDocument } from 'src/infra/repository/recruitment/schemas/resume.schema';
import { IDBFindAllOptions } from 'src/internal/database/interfaces';
import { IFilterQueryOption } from 'src/internal/pagination/interfaces';
import { PagingService } from 'src/internal/pagination/services/paging.service';
import { ResumePaginationDto } from 'src/router/routes/resume/dtos/pagination.dto';
import { IResumeAggregate } from './interfaces';

@Injectable()
export class GetResumePaginationUseCase {
  constructor(
    private readonly pagingSer: PagingService,
    private readonly resumeRepo: ResumeRepository,
    private readonly resumeParserRepo: ResumeParserRepository,
  ) {}

  async execute(paginationQuery: ResumePaginationDto) {
    const { page, take } = paginationQuery;
    const filterQuery = this.getFilterQuery(paginationQuery);
    const findResult = await this.findAndCount(filterQuery);

    return this.pagingSer.transform<IResumeAggregate>(findResult, {
      page,
      take,
    });
  }

  private async findAndCount(
    filterQuery: IFilterQueryOption<ResumeDocument>,
  ): Promise<[IResumeAggregate[], number]> {
    const [resumes, count] = await Promise.all([
      this.resumeRepo.findAll(filterQuery.find, filterQuery.options),
      this.resumeRepo.getTotal(filterQuery.find, filterQuery.options),
    ]);
    if (!count) return [[], count];

    return [await this.findResumeAggregate(resumes), count];
  }

  private async findResumeAggregate(
    resumes: ResumeDocument[],
  ): Promise<IResumeAggregate[]> {
    const resumeIds = resumes.map((resume) => resume._id);

    const resumeParsers = await this.resumeParserRepo.findAll({
      resume: { $in: resumeIds },
    });

    const resumeMap = {};
    resumeParsers?.forEach((resumeParser: ResumeParserDocument) => {
      resumeMap[resumeParser.resume.toString()] = resumeParser;
    });

    return resumes.map((resume) => {
      return {
        resume: resume,
        resumeParser: resumeMap?.[resume._id.toString()]
          ? resumeMap[resume._id.toString()]
          : null,
      };
    });
  }

  private getFilterQuery(
    paginationQuery: ResumePaginationDto,
  ): IFilterQueryOption<ResumeDocument> {
    const { take, skip, tags, parseStatuses } = paginationQuery;
    const find: FilterQuery<ResumeDocument> = {};
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
