import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { MongooseRepositoryAbstract } from 'src/internal/database/abstracts/repository.abstract';
import { MongooseModel } from 'src/internal/database/decorators/database.decorator';
import { Resume, ResumeDocument } from './schemas/resume.schema';
import { IDBCreateManyOptions } from 'src/internal/database/interfaces';

@Injectable()
export class ResumeRepository extends MongooseRepositoryAbstract<ResumeDocument> {
  constructor(
    @MongooseModel(Resume.name)
    private readonly resumeModel: Model<ResumeDocument>,
  ) {
    super(resumeModel);
  }

  async createManyResumes<N>(
    data: N[],
    options?: IDBCreateManyOptions,
  ): Promise<ResumeDocument[]> {
    const insertedData = await this.resumeModel.insertMany(data, options);
    return insertedData;
  }
}
