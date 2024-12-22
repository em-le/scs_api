import { Injectable } from '@nestjs/common';
import { Types } from 'mongoose';
import { RecruitmentRepository } from 'src/infra/repository/recruitment/recruitment.repository';
import { IRecruitmentCreation } from 'src/infra/repository/recruitment/schemas/recruitment.interface';
import { RecruitmentDocument } from 'src/infra/repository/recruitment/schemas/recruitment.schema';
import { UpdateRecruitmentDto } from 'src/router/routes/recruitment/dtos/recruiment.dto';

@Injectable()
export class UpdateRecruitmentUseCase {
  constructor(private readonly recruitmentRepo: RecruitmentRepository) {}

  async execute(
    id: Types.ObjectId,
    data: UpdateRecruitmentDto,
  ): Promise<RecruitmentDocument> {
    return await this.tryToUpdateRecruitment(id, data);
  }

  private async tryToUpdateRecruitment(
    id: Types.ObjectId,
    data: UpdateRecruitmentDto,
  ): Promise<RecruitmentDocument> {
    try {
      return await this.updateRecruitment(id, data);
    } catch (error) {
      throw new Error(error?.message);
    }
  }

  private async updateRecruitment(
    id: Types.ObjectId,
    data: IRecruitmentCreation,
  ): Promise<RecruitmentDocument> {
    return await this.recruitmentRepo.updateOneById(id, data);
  }
}
