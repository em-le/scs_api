import { AuthorDBAbstractSchema } from 'src/internal/database/abstracts/schema.abstract';
import { MongooseSchema } from 'src/internal/database/decorators/database.decorator';
import { SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { IJobParser } from '../interfaces/job-parser.interface';
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

export const JobParserCollectionName = 'job_parsers';

@MongooseSchema(JobParserCollectionName)
export class JobParser extends AuthorDBAbstractSchema implements IJobParser {
  CurrentJobIsManagement?: boolean;
  HighestManagementScore?: Int32SovrenPrimitive;
  ManagementLevel?: string | null;
  ExecutiveType?: string | null;
  MinimumYears?: Int32SovrenPrimitive;
  MaximumYears?: Int32SovrenPrimitive;
  MinimumYearsManagement?: Int32SovrenPrimitive;
  MaximumYearsManagement?: Int32SovrenPrimitive;
  RequiredDegree?: string | null;
  StartDate?: DateTimeSovrenPrimitive;
  EndDate?: DateTimeSovrenPrimitive;
  JobDescription?: string | null;
  JobRequirements?: string | null;
  Benefits?: string | null;
  EmployerDescription?: string | null;
  ApplicationDetails?: ApplicationDetails;
  JobTitles?: JobTitles;
  EmployerNames?: EmployerNames;
  Degrees?: JobDegree[] | null;
  SchoolNames?: string[] | null;
  CertificationsAndLicenses?: string[] | null;
  LanguageCodes?: string[] | null;
  CurrentLocation?: SovrenLocation;
  Salary?: PayRange;
  MinimumWorkingHours?: Int32SovrenPrimitive;
  MaximumWorkingHours?: Int32SovrenPrimitive;
  WorkingHours?: string | null;
  IsRemote?: boolean;
  DriversLicenses?: string[] | null;
  EmploymentType?: string | null;
  ContractType?: string | null;
  TermsOfInterest?: string[] | null;
  Owners?: string[] | null;
  SkillsData?: JobTaxonomyRoot[] | null;
  Skills?: V2SkillsDataJob;
  JobMetadata?: JobMetadata;
  UserDefinedTags?: string[] | null;
}

export const JobParserSchema = SchemaFactory.createForClass(JobParser);
export type JobParserDocument = HydratedDocument<JobParser>;
