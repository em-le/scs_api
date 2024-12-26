import { AuthorDBAbstractSchema } from 'src/internal/database/abstracts/schema.abstract';
import { MongooseSchema } from 'src/internal/database/decorators/database.decorator';
import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IFileMetaData, IStorage } from '../interfaces';
import { FileMetaData, Storage } from './common.schema';
import { IJob } from '../interfaces/job.interface';
import { ParseStatus } from '../constants';

export const JobCollectionName = 'jobs';
@MongooseSchema(JobCollectionName)
export class Job extends AuthorDBAbstractSchema implements IJob {
  @Prop({
    type: String,
    required: true,
  })
  fileName: string;

  @Prop({
    type: FileMetaData,
    required: true,
  })
  fileMetaData: IFileMetaData;

  @Prop({
    type: Storage,
    required: true,
  })
  storage: IStorage;

  @Prop({
    type: [String],
    required: false,
    default: [],
  })
  tags: string[];

  @Prop({
    type: String,
    enum: ParseStatus,
    default: ParseStatus.NOT_YET,
  })
  parseStatus: ParseStatus;
}

export const JobSchema = SchemaFactory.createForClass(Job);
export type JobDocument = HydratedDocument<Job>;
