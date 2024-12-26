import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { AuthorDBAbstractSchema } from 'src/internal/database/abstracts/schema.abstract';
import { MongooseSchema } from 'src/internal/database/decorators/database.decorator';
import { Job } from './job.schema';
import { IJobBimetrictMatch } from '../interfaces';
import {
  BimetricMatchResult,
  CategoryWeights,
} from 'src/infra/textkernel/openapi/data-contracts';
import { BimetricMatchResultImpl, CategoryWeightsImpl } from './common.schema';
import { JobParser } from './job-parser.schema';
import { ResumeParser } from './resume-parser.schema';
import { Resume } from './resume.schema';

export const JobBimetrictMathCollectionName = 'job_bimitric_matchs';
@MongooseSchema(JobBimetrictMathCollectionName)
export class JobBimetrictMatch
  extends AuthorDBAbstractSchema
  implements IJobBimetrictMatch
{
  @Prop({
    type: Types.ObjectId,
    required: true,
    _id: false,
    ref: Job.name,
  })
  jobId: Types.ObjectId;

  @Prop({
    type: [Types.ObjectId],
    required: true,
    _id: false,
    ref: Resume.name,
  })
  resumeIds: Types.ObjectId[];

  @Prop({
    type: Types.ObjectId,
    required: true,
    _id: false,
    ref: JobParser.name,
  })
  jobParserId: Types.ObjectId;

  @Prop({
    type: [Types.ObjectId],
    required: true,
    _id: false,
    ref: ResumeParser.name,
  })
  resumeParserIds: Types.ObjectId[];

  @Prop({
    type: [BimetricMatchResultImpl],
    required: false,
  })
  Matches?: BimetricMatchResult[] | null;

  @Prop({
    type: CategoryWeightsImpl,
    required: false,
  })
  SuggestedCategoryWeights?: CategoryWeights;

  @Prop({
    type: CategoryWeightsImpl,
    required: false,
  })
  AppliedCategoryWeights?: CategoryWeights;
}

export const JobBimetrictMatchSchema =
  SchemaFactory.createForClass(JobBimetrictMatch);
export type JobBimetrictMatchDocument = HydratedDocument<JobBimetrictMatch>;
