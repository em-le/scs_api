import { AuthorDBAbstractSchema } from 'src/internal/database/abstracts/schema.abstract';
import { MongooseSchema } from 'src/internal/database/decorators/database.decorator';
import { IResumeParser } from '../interfaces';
import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {
  Association,
  CandidateReference,
  Certification,
  ContactInformation,
  EducationHistory,
  EmploymentHistory,
  LanguageCompetency,
  LicenseDetail,
  MilitaryDetails,
  PersonalAttributes,
  ResumeMetadata,
  ResumeTaxonomyRoot,
  SecurityCredential,
  TrainingHistory,
  V2SkillsDataResume,
} from 'src/infra/textkernel/openapi/data-contracts';
import { AssociationImpl, LanguageCompetencyImpl } from './common.schema';

export const ResumeParserCollectionName = 'resume_parsers';

@MongooseSchema(ResumeParserCollectionName)
export class ResumeParser
  extends AuthorDBAbstractSchema
  implements IResumeParser
{
  ContactInformation?: ContactInformation;

  @Prop({
    type: String,
    required: false,
  })
  ProfessionalSummary?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Objective?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  CoverLetter?: string | null;

  PersonalAttributes?: PersonalAttributes;

  Education?: EducationHistory;

  EmploymentHistory?: EmploymentHistory;

  SkillsData?: ResumeTaxonomyRoot[] | null;

  Skills?: V2SkillsDataResume;

  Certifications?: Certification[] | null;

  Licenses?: LicenseDetail[] | null;

  @Prop({
    type: [AssociationImpl],
    required: false,
  })
  Associations?: Association[] | null;

  @Prop({
    type: [LanguageCompetencyImpl],
    required: false,
  })
  LanguageCompetencies?: LanguageCompetency[] | null;

  MilitaryExperience?: MilitaryDetails[] | null;

  SecurityCredentials?: SecurityCredential[] | null;

  References?: CandidateReference[] | null;

  @Prop({
    type: String,
    required: false,
  })
  Achievements?: string[] | null;

  Training?: TrainingHistory;

  @Prop({
    type: String,
    required: false,
  })
  QualificationsSummary?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Hobbies?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Patents?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Publications?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  SpeakingEngagements?: string | null;

  ResumeMetadata?: ResumeMetadata;

  @Prop({
    type: [String],
    required: false,
  })
  UserDefinedTags?: string[] | null;
}

export const ResumeParserSchema = SchemaFactory.createForClass(ResumeParser);
export type ResumeParserDocument = HydratedDocument<ResumeParser>;
