import { AuthorDBAbstractSchema } from 'src/internal/database/abstracts/schema.abstract';
import { MongooseSchema } from 'src/internal/database/decorators/database.decorator';
import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IFileMetaData, IResume, IStorage } from '../interfaces';
import { ParseStatus } from '../constants';
import { FileMetaData, Storage } from './common.schema';

export const ResumeCollectionName = 'resumes';
@MongooseSchema(ResumeCollectionName)
export class Resume extends AuthorDBAbstractSchema implements IResume {
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

export const ResumeSchema = SchemaFactory.createForClass(Resume);
export type ResumeDocument = HydratedDocument<Resume>;
