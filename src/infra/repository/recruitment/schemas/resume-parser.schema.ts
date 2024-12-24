import { AuthorDBAbstractSchema } from 'src/internal/database/abstracts/schema.abstract';
import { MongooseSchema } from 'src/internal/database/decorators/database.decorator';
import { IResumeParser } from '../interfaces';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
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
  ResumeData,
  ResumeMetadata,
  ResumeTaxonomyRoot,
  SecurityCredential,
  TrainingHistory,
  V2SkillsDataResume,
} from 'src/infra/textkernel/openapi/data-contracts';
import {
  AssociationImpl,
  CandidateReferenceImpl,
  CertificationImpl,
  ContactInformationImpl,
  EducationHistoryImpl,
  EmploymentHistoryImpl,
  LanguageCompetencyImpl,
  LicenseDetailImpl,
  MilitaryDetailsImpl,
  PersonalAttributesImpl,
  ResumeMetadataImpl,
  ResumeTaxonomyRootImpl,
  SecurityCredentialImpl,
  TrainingHistoryImpl,
  V2SkillsDataResumeImpl,
} from './common.schema';
import { Resume } from './resume.schema';

export const ResumeParserCollectionName = 'resume_parsers';

@Schema()
export class ResumeDataImpl implements ResumeData {
  @Prop({
    type: ContactInformationImpl,
    required: false,
  })
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

  @Prop({
    type: PersonalAttributesImpl,
    required: false,
  })
  PersonalAttributes?: PersonalAttributes;

  @Prop({
    type: EducationHistoryImpl,
    required: false,
  })
  Education?: EducationHistory;

  @Prop({
    type: EmploymentHistoryImpl,
    required: false,
  })
  EmploymentHistory?: EmploymentHistory;

  @Prop({
    type: [ResumeTaxonomyRootImpl],
    required: false,
  })
  SkillsData?: ResumeTaxonomyRoot[] | null;

  @Prop({
    type: V2SkillsDataResumeImpl,
    required: false,
  })
  Skills?: V2SkillsDataResume;

  @Prop({
    type: [CertificationImpl],
    required: false,
  })
  Certifications?: Certification[] | null;

  @Prop({
    type: [LicenseDetailImpl],
    required: false,
  })
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

  @Prop({
    type: [MilitaryDetailsImpl],
    required: false,
  })
  MilitaryExperience?: MilitaryDetails[] | null;

  @Prop({
    type: [SecurityCredentialImpl],
    required: false,
  })
  SecurityCredentials?: SecurityCredential[] | null;

  @Prop({
    type: [CandidateReferenceImpl],
    required: false,
  })
  References?: CandidateReference[] | null;

  @Prop({
    type: [String],
    required: false,
  })
  Achievements?: string[] | null;

  @Prop({
    type: TrainingHistoryImpl,
    required: false,
  })
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

  @Prop({
    type: ResumeMetadataImpl,
    required: false,
  })
  ResumeMetadata?: ResumeMetadata;

  @Prop({
    type: [String],
    required: false,
  })
  UserDefinedTags?: string[] | null;
}

@MongooseSchema(ResumeParserCollectionName)
export class ResumeParser
  extends AuthorDBAbstractSchema
  implements IResumeParser
{
  @Prop({
    type: Types.ObjectId,
    required: true,
    _id: false,
    ref: Resume.name,
  })
  resume: Types.ObjectId;

  @Prop({
    type: ResumeDataImpl,
    required: true,
  })
  ResumeData: ResumeData;

  @Prop({
    type: ResumeDataImpl,
    required: true,
  })
  RedactedResumeData: ResumeData;
}

export const ResumeParserSchema = SchemaFactory.createForClass(ResumeParser);
export type ResumeParserDocument = HydratedDocument<ResumeParser>;
