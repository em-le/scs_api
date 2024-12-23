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

export interface IParserCreation extends ResumeData {
  ContactInformation?: ContactInformation;
  ProfessionalSummary?: string | null;
  Objective?: string | null;
  CoverLetter?: string | null;
  PersonalAttributes?: PersonalAttributes;
  Education?: EducationHistory;
  EmploymentHistory?: EmploymentHistory;
  SkillsData?: ResumeTaxonomyRoot[] | null;
  Skills?: V2SkillsDataResume;
  Certifications?: Certification[] | null;
  Licenses?: LicenseDetail[] | null;
  Associations?: Association[] | null;
  LanguageCompetencies?: LanguageCompetency[] | null;
  MilitaryExperience?: MilitaryDetails[] | null;
  SecurityCredentials?: SecurityCredential[] | null;
  References?: CandidateReference[] | null;
  Achievements?: string[] | null;
  Training?: TrainingHistory;
  QualificationsSummary?: string | null;
  Hobbies?: string | null;
  Patents?: string | null;
  Publications?: string | null;
  SpeakingEngagements?: string | null;
  ResumeMetadata?: ResumeMetadata;
  UserDefinedTags?: string[] | null;
}

export interface IParser extends IParserCreation {}
