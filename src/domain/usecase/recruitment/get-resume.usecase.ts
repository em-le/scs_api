import { Injectable } from '@nestjs/common';
import { Types } from 'mongoose';
import { ParseStatus } from 'src/infra/repository/recruitment/constants';
import { ResumeParserRepository } from 'src/infra/repository/recruitment/resume-parser.repository';
import { ResumeRepository } from 'src/infra/repository/recruitment/resume.repository';
import { ResumeDocument } from 'src/infra/repository/recruitment/schemas/resume.schema';

@Injectable()
export class GetResumeUseCase {
  constructor(
    private readonly resumeRepo: ResumeRepository,
    private readonly resumeParserRepo: ResumeParserRepository,
  ) {}

  async execute(id: Types.ObjectId) {
    const resume = await this.resumeRepo.findOneById(id);
    if (!resume) {
      throw new Error('The resume is not found');
    }
    return this.getJobAggregate(resume);
  }

  private async getJobAggregate(resume: ResumeDocument) {
    if (resume.parseStatus != ParseStatus.PARSED) {
      return { resume: resume, resumePasser: null };
    }
    const resumeParser = await this.resumeParserRepo.findOne({
      resume: resume._id,
    });
    return {
      resume: resume,
      resumeParser: resumeParser,
    };
  }
}
