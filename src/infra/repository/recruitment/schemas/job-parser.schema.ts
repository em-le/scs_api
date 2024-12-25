import { AuthorDBAbstractSchema } from 'src/internal/database/abstracts/schema.abstract';
import { MongooseSchema } from 'src/internal/database/decorators/database.decorator';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { IJobParser } from '../interfaces/job-parser.interface';
import { JobData } from 'src/infra/textkernel/openapi/data-contracts';
import {
  ApplicationDetails,
  DateTimeSovrenPrimitive,
  EmployerNames,
  Int32SovrenPrimitive,
  JobDegree,
  JobMetadata,
  JobTaxonomyRoot,
  JobTitles,
  PayRange,
  SovrenLocation,
  V2SkillsDataJob,
} from 'src/infra/textkernel/openapi/data-contracts';
import {
  ApplicationDetailsImpl,
  DateTimeSovrenPrimitiveImpl,
  EmployerNamesImpl,
  Int32SovrenPrimitiveImpl,
  JobDegreeImpl,
  JobTaxonomyRootImpl,
  JobTitlesImpl,
  PayRangeImpl,
  SovrenLocationImpl,
} from './common.schema';

export const JobParserCollectionName = 'job_parsers';

@Schema()
export class JobDataImpl implements JobData {
  @Prop({
    type: Boolean,
    required: false,
  })
  CurrentJobIsManagement?: boolean;
  @Prop({
    type: Int32SovrenPrimitiveImpl,
    required: false,
  })
  HighestManagementScore?: Int32SovrenPrimitive;
  @Prop({
    type: String,
    required: false,
  })
  ManagementLevel?: string | null;
  @Prop({
    type: String,
    required: false,
  })
  ExecutiveType?: string | null;
  @Prop({
    type: Int32SovrenPrimitiveImpl,
    required: false,
  })
  MinimumYears?: Int32SovrenPrimitive;
  @Prop({
    type: Int32SovrenPrimitiveImpl,
    required: false,
  })
  MaximumYears?: Int32SovrenPrimitive;
  @Prop({
    type: Int32SovrenPrimitiveImpl,
    required: false,
  })
  MinimumYearsManagement?: Int32SovrenPrimitive;
  @Prop({
    type: Int32SovrenPrimitiveImpl,
    required: false,
  })
  MaximumYearsManagement?: Int32SovrenPrimitive;
  @Prop({
    type: String,
    required: false,
  })
  RequiredDegree?: string | null;
  @Prop({
    type: DateTimeSovrenPrimitiveImpl,
    required: false,
  })
  StartDate?: DateTimeSovrenPrimitive;
  @Prop({
    type: DateTimeSovrenPrimitiveImpl,
    required: false,
  })
  EndDate?: DateTimeSovrenPrimitive;
  @Prop({
    type: String,
    required: false,
  })
  JobDescription?: string | null;
  @Prop({
    type: String,
    required: false,
  })
  JobRequirements?: string | null;
  @Prop({
    type: String,
    required: false,
  })
  Benefits?: string | null;
  @Prop({
    type: String,
    required: false,
  })
  EmployerDescription?: string | null;
  @Prop({
    type: ApplicationDetailsImpl,
    required: false,
  })
  ApplicationDetails?: ApplicationDetails;
  @Prop({
    type: JobTitlesImpl,
    required: false,
  })
  JobTitles?: JobTitles;
  @Prop({
    type: EmployerNamesImpl,
    required: false,
  })
  EmployerNames?: EmployerNames;
  @Prop({
    type: [JobDegreeImpl],
    required: false,
  })
  Degrees?: JobDegree[] | null;
  @Prop({
    type: [String],
    required: false,
  })
  SchoolNames?: string[] | null;
  @Prop({
    type: [String],
    required: false,
  })
  CertificationsAndLicenses?: string[] | null;
  @Prop({
    type: [String],
    required: false,
  })
  LanguageCodes?: string[] | null;
  @Prop({
    type: SovrenLocationImpl,
    required: false,
  })
  CurrentLocation?: SovrenLocation;
  @Prop({
    type: PayRangeImpl,
    required: false,
  })
  Salary?: PayRange;
  @Prop({
    type: Int32SovrenPrimitiveImpl,
    required: false,
  })
  MinimumWorkingHours?: Int32SovrenPrimitive;
  @Prop({
    type: Int32SovrenPrimitiveImpl,
    required: false,
  })
  MaximumWorkingHours?: Int32SovrenPrimitive;
  @Prop({
    type: String,
    required: false,
  })
  WorkingHours?: string | null;
  @Prop({
    type: Boolean,
    required: false,
  })
  IsRemote?: boolean;
  @Prop({
    type: [String],
    required: false,
  })
  DriversLicenses?: string[] | null;
  @Prop({
    type: String,
    required: false,
  })
  EmploymentType?: string | null;
  @Prop({
    type: String,
    required: false,
  })
  ContractType?: string | null;
  @Prop({
    type: [String],
    required: false,
  })
  TermsOfInterest?: string[] | null;
  @Prop({
    type: [String],
    required: false,
  })
  Owners?: string[] | null;
  @Prop({
    type: [JobTaxonomyRootImpl],
    required: false,
  })
  SkillsData?: JobTaxonomyRoot[] | null;
  @Prop({
    type: Object,
    required: false,
  })
  Skills?: V2SkillsDataJob;
  @Prop({
    type: Object,
    required: false,
  })
  JobMetadata?: JobMetadata;
  @Prop({
    type: [String],
    required: false,
  })
  UserDefinedTags?: string[] | null;
}

@MongooseSchema(JobParserCollectionName)
export class JobParser extends AuthorDBAbstractSchema implements IJobParser {
  @Prop({
    type: JobDataImpl,
    required: true,
  })
  JobData: JobData;
}

export const JobParserSchema = SchemaFactory.createForClass(JobParser);
export type JobParserDocument = HydratedDocument<JobParser>;
