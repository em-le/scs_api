import { AuthorDBAbstractSchema } from 'src/internal/database/abstracts/schema.abstract';
import { MongooseSchema } from 'src/internal/database/decorators/database.decorator';
import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {
  IFileMetaData,
  IResume,
  IStorage,
} from '../interfaces/resume.interface';
import { ResumeFormat, StorageType } from '../constants';

export const ResumeCollectionName = 'resumes';
@MongooseSchema(ResumeCollectionName)
export class Resume extends AuthorDBAbstractSchema implements IResume {
  @Prop({
    type: String,
    required: true,
  })
  fileName: string;

  @Prop({
    type: {
      size: { type: Number, required: true },
      format: { type: String, enum: ResumeFormat, default: ResumeFormat.PDF },
      pages: { type: Number, default: 0 },
    },
    required: true,
  })
  fileMetaData: IFileMetaData;

  @Prop({
    type: {
      location: { type: String, required: true },
      storage_type: {
        type: String,
        enum: StorageType,
        default: StorageType.LOCAL,
      },
    },
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
    type: Date,
    default: null,
    required: false,
  })
  lastestParseDate: Date | null;

  @Prop({
    type: Date,
    default: null,
    required: false,
  })
  lastestMatchDate: Date | null;
}

export const ResumeSchema = SchemaFactory.createForClass(Resume);
export type ResumeDocument = HydratedDocument<Resume>;
