import { Injectable } from '@nestjs/common';
import { Types } from 'mongoose';
import { ResumeRepository } from 'src/infra/repository/recruitment/resume.repository';
import { ResumeDocument } from 'src/infra/repository/recruitment/schemas/resume.schema';

@Injectable()
export class GetResumeUseCase {
  constructor(private readonly resumeRepo: ResumeRepository) {}

  async execute(id: Types.ObjectId): Promise<ResumeDocument> {
    return await this.resumeRepo.findOneById(id);
  }
}
