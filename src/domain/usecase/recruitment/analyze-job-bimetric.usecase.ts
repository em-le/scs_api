import { Injectable } from '@nestjs/common';
import { Types } from 'mongoose';
import { JobBimetricService } from 'src/domain/service/recruitment/job-bimetric.service';
import { JobParserRepository } from 'src/infra/repository/recruitment/job-parser.repository';
import { ResumeParserRepository } from 'src/infra/repository/recruitment/resume-parser.repository';

@Injectable()
export class AnalyzeJobBimetricUseCase {
  constructor(
    private readonly jobParserRepo: JobParserRepository,
    private readonly resumeParserRepo: ResumeParserRepository,
    private readonly jobBimetricService: JobBimetricService,
  ) {}
  async execute(jobId: Types.ObjectId, resumeIds: Types.ObjectId[]) {
    const [jobParser, resumeParsers] = await Promise.all([
      this.jobParserRepo.findOne({ _id: jobId }),
      this.resumeParserRepo.findAll({
        _id: { $in: resumeIds },
      }),
    ]);
    if (!jobParser) {
      throw new Error('The job is not found');
    }
    if (!resumeParsers?.length || resumeParsers.length != resumeIds.length) {
      throw new Error('The resumes are invalid');
    }

    await this.jobBimetricService.analyzeResumes(jobParser, resumeParsers);
  }
}
