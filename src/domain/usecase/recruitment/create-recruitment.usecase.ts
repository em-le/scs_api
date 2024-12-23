import { Injectable } from '@nestjs/common';
import { RecruitmentRepository } from 'src/infra/repository/recruitment/recruitment.repository';
import { IRecruitmentCreation } from 'src/infra/repository/recruitment/interfaces/recruitment.interface';
import { RecruitmentDocument } from 'src/infra/repository/recruitment/schemas/recruitment.schema';
import { CreateRecruitmentDto } from 'src/router/routes/recruitment/dtos/recruiment.dto';

@Injectable()
export class CreateRecruitmentUseCase {
  constructor(private readonly recruitmentRepo: RecruitmentRepository) {}

  async execute(data: CreateRecruitmentDto): Promise<RecruitmentDocument> {
    return await this.tryToCreateRecruitment(data);
  }

  private async tryToCreateRecruitment(
    data: IRecruitmentCreation,
  ): Promise<RecruitmentDocument> {
    try {
      return await this.createRecruitment(data);
    } catch (error) {
      throw new Error(error?.message);
    }
  }

  private async createRecruitment(
    data: IRecruitmentCreation,
  ): Promise<RecruitmentDocument> {
    return await this.recruitmentRepo.create(data);
  }
}
