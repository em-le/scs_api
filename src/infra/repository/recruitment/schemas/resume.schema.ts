import { AuthorDBAbstractSchema } from 'src/internal/database/abstracts/schema.abstract';
import { MongooseSchema } from 'src/internal/database/decorators/database.decorator';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {
  IFileMetaData,
  IResume,
  IStorage,
} from '../interfaces/resume.interface';
import { ResumeFormat, StorageType } from '../constants';

export const ResumeCollectionName = 'resumes';

@Schema()
class FileMetaData implements IFileMetaData {
  @Prop({
    type: Number,
    required: true,
  })
  size: number;

  @Prop({
    type: String,
    enum: ResumeFormat,
    default: ResumeFormat.PDF,
  })
  format: ResumeFormat;

  @Prop({
    type: Number,
    default: 0,
  })
  pages: number;
}
@Schema()
class Storage implements IStorage {
  @Prop({
    type: String,
    required: true,
  })
  location: string;

  @Prop({
    type: String,
    enum: StorageType,
    default: StorageType.LOCAL,
  })
  storageType: StorageType;
}

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
    type: Boolean,
    default: false,
  })
  isParsed: boolean;
}

export const ResumeSchema = SchemaFactory.createForClass(Resume);
export type ResumeDocument = HydratedDocument<Resume>;
