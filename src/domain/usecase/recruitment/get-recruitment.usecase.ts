import { Injectable } from '@nestjs/common';
import { Types } from 'mongoose';
import { RecruitmentRepository } from 'src/infra/repository/recruitment/recruitment.repository';
import { RecruitmentDocument } from 'src/infra/repository/recruitment/schemas/recruitment.schema';

@Injectable()
export class GetRecruitmentUseCase {
  constructor(private readonly recruitmentRepo: RecruitmentRepository) {}

  async execute(id: Types.ObjectId): Promise<RecruitmentDocument> {
    return await this.recruitmentRepo.findOneById(id);
  }
}
