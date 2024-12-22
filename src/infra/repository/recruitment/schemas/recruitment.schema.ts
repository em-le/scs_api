import { AuthorDBAbstractSchema } from 'src/internal/database/abstracts/schema.abstract';
import { MongooseSchema } from 'src/internal/database/decorators/database.decorator';
import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IRecruitment } from './recruitment.interface';
import { RecruitmentStatus } from './recruitment.constant';

export const RecruitmentCollectionName = 'recruitments';
@MongooseSchema(RecruitmentCollectionName)
export class Recruitment
  extends AuthorDBAbstractSchema
  implements IRecruitment
{
  @Prop({
    type: String,
    required: true,
  })
  jobTitle: string;

  @Prop({
    type: String,
    required: true,
  })
  jobDescription: string;

  @Prop({
    type: Date,
    required: false,
  })
  startDate: Date;

  @Prop({
    type: Date,
    required: false,
  })
  endDate: Date;

  @Prop({
    type: Number,
    required: true,
  })
  numberOfOpenings: number;

  @Prop({
    type: String,
    required: true,
    enum: RecruitmentStatus,
    default: RecruitmentStatus.ACTIVE,
  })
  status: RecruitmentStatus;
}

export const RecruitmentSchema = SchemaFactory.createForClass(Recruitment);
export type RecruitmentDocument = HydratedDocument<Recruitment>;
