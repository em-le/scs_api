import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { MongooseRepositoryAbstract } from 'src/internal/database/abstracts/repository.abstract';
import { MongooseModel } from 'src/internal/database/decorators/database.decorator';
import { Resume, ResumeDocument } from './schemas/resume.schema';

@Injectable()
export class ResumeRepository extends MongooseRepositoryAbstract<ResumeDocument> {
  constructor(
    @MongooseModel(Resume.name)
    private readonly resumeModel: Model<ResumeDocument>,
  ) {
    super(resumeModel);
  }

  //
}
