import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { MongooseRepositoryAbstract } from 'src/internal/database/abstracts/repository.abstract';
import { RecruitmentDocument, Recruitment } from './schemas/recruitment.schema';
import { MongooseModel } from 'src/internal/database/decorators/database.decorator';

@Injectable()
export class RecruitmentRepository extends MongooseRepositoryAbstract<RecruitmentDocument> {
  constructor(
    @MongooseModel(Recruitment.name)
    private readonly recruitmentModel: Model<RecruitmentDocument>,
  ) {
    super(recruitmentModel);
  }

  //
}
