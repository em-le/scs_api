import { Prop, Schema } from '@nestjs/mongoose';
import {
  Association,
  BooleanSovrenPrimitive,
  Bullet,
  CandidateReference,
  Certification,
  CompanyName,
  ContactInformation,
  DateTimeSovrenPrimitive,
  Degree,
  EducationDetails,
  EducationHistory,
  Employer,
  EmploymentHistory,
  ExperienceSummary,
  Finding,
  GeoCoordinate,
  GradepointAverage,
  Int32NormalizedProfessionClassification,
  Int32SovrenPrimitive,
  Int32VersionedNormalizedProfessionClassification,
  JobTitle,
  LanguageCompetency,
  LicenseDetail,
  MilitaryDetails,
  MilitaryService,
  NameValue,
  NationalIdentity,
  NormalizedDegree,
  NormalizedProfession,
  PersonalAttributes,
  PersonName,
  Position,
  ReservedData,
  ResumeMetadata,
  ResumeQualityAssessment,
  ResumeSection,
  ResumeSkill,
  ResumeSkillVariation,
  ResumeSubTaxonomy,
  ResumeTaxonomy,
  ResumeTaxonomyRoot,
  Salary,
  SectionIdentifier,
  SecurityCredential,
  SovrenDateWithParts,
  SovrenLocation,
  StringVersionedNormalizedProfessionClassification,
  Telephone,
  TrainingDetail,
  TrainingHistory,
  V2NormalizedSkillResume,
  V2ProfessionClass,
  V2ProfessionGroup,
  V2RawSkillResume,
  V2SkillsDataResume,
  WebAddress,
} from 'src/infra/textkernel/openapi/data-contracts';

@Schema()
export class AssociationImpl implements Association {
  @Prop({
    type: String,
    required: false,
  })
  Organization?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Role?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  FoundInContext?: string | null;
}

@Schema()
export class LanguageCompetencyImpl implements LanguageCompetency {
  @Prop({
    type: String,
    required: false,
  })
  Language?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  LanguageCode?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  FoundInContext?: string | null;
}

@Schema()
export class PersonNameImpl implements PersonName {
  @Prop({
    type: String,
    required: false,
  })
  FormattedName?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Prefix?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  GivenName?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Moniker?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  MiddleName?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  FamilyName?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Suffix?: string | null;
}

@Schema()
export class TelephoneImpl implements Telephone {
  @Prop({
    type: String,
    required: false,
  })
  Raw?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Normalized?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  InternationalCountryCode?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  AreaCityCode?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  SubscriberNumber?: string | null;
}

@Schema()
export class GeoCoordinateImpl implements GeoCoordinate {
  @Prop({
    type: Number,
    required: false,
  })
  Latitude?: number;

  @Prop({
    type: Number,
    required: false,
  })
  Longitude?: number;

  @Prop({
    type: String,
    required: false,
  })
  Source?: string | null;
}

@Schema()
export class SovrenLocationImpl implements SovrenLocation {
  @Prop({
    type: String,
    required: false,
  })
  CountryCode?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  PostalCode?: string | null;

  @Prop({
    type: [String],
    required: false,
  })
  Regions?: string[] | null;

  @Prop({
    type: String,
    required: false,
  })
  Municipality?: string | null;

  @Prop({
    type: [String],
    required: false,
  })
  StreetAddressLines?: string[] | null;

  @Prop({
    type: GeoCoordinateImpl,
    required: false,
  })
  GeoCoordinates?: GeoCoordinate;
}

@Schema()
export class WebAddressImpl implements WebAddress {
  @Prop({
    type: String,
    required: false,
  })
  Address?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Type?: string | null;
}

@Schema()
export class ContactInformationImpl implements ContactInformation {
  @Prop({
    type: PersonNameImpl,
    required: false,
  })
  CandidateName?: PersonName;

  @Prop({
    type: [TelephoneImpl],
    required: false,
  })
  Telephones?: Telephone[] | null;

  @Prop({
    type: [String],
    required: false,
  })
  EmailAddresses?: string[] | null;

  @Prop({
    type: SovrenLocationImpl,
    required: false,
  })
  Location?: SovrenLocation;

  @Prop({
    type: [WebAddressImpl],
    required: false,
  })
  WebAddresses?: WebAddress[] | null;
}

@Schema()
export class SalaryImpl implements Salary {
  @Prop({
    type: String,
    required: false,
  })
  Currency?: string | null;

  @Prop({
    type: Number,
    required: false,
  })
  Amount?: number;
}

@Schema()
export class SovrenDateWithPartsImpl implements SovrenDateWithParts {
  @Prop({
    type: String,
    required: false,
  })
  Date?: string;

  @Prop({
    type: Boolean,
    required: false,
  })
  IsCurrentDate?: boolean;

  @Prop({
    type: Boolean,
    required: false,
  })
  FoundYear?: boolean;

  @Prop({
    type: Boolean,
    required: false,
  })
  FoundMonth?: boolean;

  @Prop({
    type: Boolean,
    required: false,
  })
  FoundDay?: boolean;
}

@Schema()
export class NationalIdentityImpl implements NationalIdentity {
  @Prop({
    type: String,
    required: false,
  })
  Number?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Phrase?: string | null;
}

@Schema()
export class PersonalAttributesImpl implements PersonalAttributes {
  @Prop({
    type: String,
    required: false,
  })
  Availability?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Birthplace?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  CurrentLocation?: string | null;

  @Prop({
    type: SalaryImpl,
    required: false,
  })
  CurrentSalary?: Salary;

  @Prop({
    type: SovrenDateWithPartsImpl,
    required: false,
  })
  DateOfBirth?: SovrenDateWithParts;

  @Prop({
    type: String,
    required: false,
  })
  DrivingLicense?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  FamilyComposition?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  FathersName?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Gender?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  HukouCity?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  HukouArea?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  MaritalStatus?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  MothersMaidenName?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  MotherTongue?: string | null;

  @Prop({
    type: NationalIdentityImpl,
    required: false,
  })
  NationalIdentities?: NationalIdentity[] | null;

  @Prop({
    type: String,
    required: false,
  })
  Nationality?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  PassportNumber?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  PreferredLocation?: string | null;

  @Prop({
    type: SalaryImpl,
    required: false,
  })
  RequiredSalary?: Salary;

  @Prop({
    type: String,
    required: false,
  })
  VisaStatus?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  WillingToRelocate?: string | null;
}

@Schema()
export class NameValueImpl implements NameValue {
  @Prop({
    type: String,
    required: false,
  })
  Raw?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Normalized?: string | null;
}

@Schema()
export class NormalizedDegreeImpl implements NormalizedDegree {
  @Prop({
    type: String,
    required: false,
  })
  Code?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Description?: string | null;
}

@Schema()
export class DegreeImpl implements Degree {
  @Prop({
    type: NameValueImpl,
    required: false,
  })
  Name?: NameValue;

  @Prop({
    type: String,
    required: false,
  })
  Type?: string | null;

  @Prop({
    type: NormalizedDegreeImpl,
    required: false,
  })
  NormalizedLocal?: NormalizedDegree;

  @Prop({
    type: NormalizedDegreeImpl,
    required: false,
  })
  NormalizedInternational?: NormalizedDegree;
}

@Schema()
export class GradepointAverageImpl implements GradepointAverage {
  @Prop({
    type: String,
    required: false,
  })
  Score?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  ScoringSystem?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  MaxScore?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  MinimumScore?: string | null;

  @Prop({
    type: Number,
    required: false,
  })
  NormalizedScore?: number;
}

@Schema()
export class BooleanSovrenPrimitiveImpl implements BooleanSovrenPrimitive {
  @Prop({
    type: Boolean,
    required: false,
  })
  Value?: boolean;
}

@Schema()
export class EducationDetailsImpl implements EducationDetails {
  @Prop({
    type: String,
    required: false,
  })
  Id?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Text?: string | null;

  @Prop({
    type: NameValueImpl,
    required: false,
  })
  SchoolName?: NameValue;

  @Prop({
    type: String,
    required: false,
  })
  SchoolType?: string | null;

  @Prop({
    type: SovrenLocationImpl,
    required: false,
  })
  Location?: SovrenLocation;

  @Prop({
    type: DegreeImpl,
    required: false,
  })
  Degree?: Degree;

  @Prop({
    type: [String],
    required: false,
  })
  Majors?: string[] | null;

  @Prop({
    type: [String],
    required: false,
  })
  Minors?: string[] | null;

  @Prop({
    type: GradepointAverageImpl,
    required: false,
  })
  GPA?: GradepointAverage;

  @Prop({
    type: SovrenDateWithPartsImpl,
    required: false,
  })
  LastEducationDate?: SovrenDateWithParts;

  @Prop({
    type: SovrenDateWithPartsImpl,
    required: false,
  })
  StartDate?: SovrenDateWithParts;

  @Prop({
    type: SovrenDateWithPartsImpl,
    required: false,
  })
  EndDate?: SovrenDateWithParts;

  @Prop({
    type: BooleanSovrenPrimitiveImpl,
    required: false,
  })
  Graduated?: BooleanSovrenPrimitive;
}

@Schema()
export class EducationHistoryImpl implements EducationHistory {
  @Prop({
    type: DegreeImpl,
    required: false,
  })
  HighestDegree?: Degree;

  @Prop({
    type: [EducationDetailsImpl],
    required: false,
  })
  EducationDetails?: EducationDetails[] | null;
}

@Schema()
export class ExperienceSummaryImpl implements ExperienceSummary {
  @Prop({
    type: String,
    required: false,
  })
  Description?: string | null;

  @Prop({
    type: Number,
    required: false,
  })
  MonthsOfWorkExperience?: number;

  @Prop({
    type: Number,
    required: false,
  })
  MonthsOfManagementExperience?: number;

  @Prop({
    type: String,
    required: false,
  })
  ExecutiveType?: string | null;

  @Prop({
    type: Number,
    required: false,
  })
  AverageMonthsPerEmployer?: number;

  @Prop({
    type: Number,
    required: false,
  })
  FulltimeDirectHirePredictiveIndex?: number;

  @Prop({
    type: String,
    required: false,
  })
  ManagementStory?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  CurrentManagementLevel?: string | null;

  @Prop({
    type: Number,
    required: false,
  })
  ManagementScore?: number;

  @Prop({
    type: String,
    required: false,
  })
  AttentionNeeded?: string | null;
}

@Schema()
export class CompanyNameImpl implements CompanyName {
  @Prop({
    type: String,
    required: false,
  })
  Probability?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Raw?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Normalized?: string | null;
}

@Schema()
export class EmployerImpl implements Employer {
  @Prop({
    type: CompanyNameImpl,
    required: false,
  })
  Name?: CompanyName;

  @Prop({
    type: NameValueImpl,
    required: false,
  })
  OtherFoundName?: NameValue;

  @Prop({
    type: SovrenLocationImpl,
    required: false,
  })
  Location?: SovrenLocation;
}

@Schema()
export class JobTitleImpl implements JobTitle {
  @Prop({
    type: String,
    required: false,
  })
  Raw?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Normalized?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Probability?: string | null;

  @Prop({
    type: [String],
    required: false,
  })
  Variations?: string[] | null;
}

@Schema()
export class Int32SovrenPrimitiveImpl implements Int32SovrenPrimitive {
  @Prop({
    type: Number,
    required: false,
  })
  Value?: number;
}

@Schema()
export class BulletImpl implements Bullet {
  @Prop({
    type: String,
    required: false,
  })
  Type?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Text?: string | null;
}

@Schema()
export class Int32NormalizedProfessionClassificationImpl
  implements Int32NormalizedProfessionClassification
{
  @Prop({
    type: Number,
    required: false,
  })
  CodeId?: number;

  @Prop({
    type: String,
    required: false,
  })
  Description?: string | null;
}

@Schema()
export class Int32VersionedNormalizedProfessionClassificationImpl
  implements Int32VersionedNormalizedProfessionClassification
{
  @Prop({
    type: String,
    required: false,
  })
  Version?: string | null;

  @Prop({
    type: Number,
    required: false,
  })
  CodeId?: number;

  @Prop({
    type: String,
    required: false,
  })
  Description?: string | null;
}

@Schema()
export class StringVersionedNormalizedProfessionClassificationImpl
  implements StringVersionedNormalizedProfessionClassification
{
  @Prop({
    type: String,
    required: false,
  })
  Version?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  CodeId?: string;

  @Prop({
    type: String,
    required: false,
  })
  Description?: string | null;
}

@Schema()
export class NormalizedProfessionImpl implements NormalizedProfession {
  @Prop({
    type: Int32NormalizedProfessionClassificationImpl,
    required: false,
  })
  Profession?: Int32NormalizedProfessionClassification;

  @Prop({
    type: Int32NormalizedProfessionClassificationImpl,
    required: false,
  })
  Group?: Int32NormalizedProfessionClassification;

  @Prop({
    type: Int32NormalizedProfessionClassificationImpl,
    required: false,
  })
  Class?: Int32NormalizedProfessionClassification;

  @Prop({
    type: Int32VersionedNormalizedProfessionClassificationImpl,
    required: false,
  })
  ISCO?: Int32VersionedNormalizedProfessionClassification;

  @Prop({
    type: StringVersionedNormalizedProfessionClassificationImpl,
    required: false,
  })
  ONET?: StringVersionedNormalizedProfessionClassification;

  @Prop({
    type: Number,
    required: false,
  })
  Confidence?: number;
}

@Schema()
export class PositionImpl implements Position {
  @Prop({
    type: String,
    required: false,
  })
  Id?: string | null;

  @Prop({
    type: EmployerImpl,
    required: false,
  })
  Employer?: Employer;

  @Prop({
    type: [String],
    required: false,
  })
  RelatedToByDates?: string[] | null;

  @Prop({
    type: [String],
    required: false,
  })
  RelatedToByCompanyName?: string[] | null;

  @Prop({
    type: Boolean,
    required: false,
  })
  IsSelfEmployed?: boolean;

  @Prop({
    type: Boolean,
    required: false,
  })
  IsCurrent?: boolean;

  @Prop({
    type: JobTitleImpl,
    required: false,
  })
  JobTitle?: JobTitle;

  @Prop({
    type: SovrenDateWithPartsImpl,
    required: false,
  })
  StartDate?: SovrenDateWithParts;

  @Prop({
    type: SovrenDateWithPartsImpl,
    required: false,
  })
  EndDate?: SovrenDateWithParts;

  @Prop({
    type: Int32SovrenPrimitiveImpl,
    required: false,
  })
  NumberEmployeesSupervised?: Int32SovrenPrimitive;

  @Prop({
    type: String,
    required: false,
  })
  JobType?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  TaxonomyName?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  SubTaxonomyName?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  JobLevel?: string | null;

  @Prop({
    type: Number,
    required: false,
  })
  TaxonomyPercentage?: number;

  @Prop({
    type: String,
    required: false,
  })
  Description?: string | null;

  @Prop({
    type: [BulletImpl],
    required: false,
  })
  Bullets?: Bullet[] | null;

  @Prop({
    type: NormalizedProfessionImpl,
    required: false,
  })
  NormalizedProfession?: NormalizedProfession;
}

@Schema()
export class EmploymentHistoryImpl implements EmploymentHistory {
  @Prop({
    type: ExperienceSummaryImpl,
    required: false,
  })
  ExperienceSummary?: ExperienceSummary;

  @Prop({
    type: [PositionImpl],
    required: false,
  })
  Positions?: Position[] | null;
}

@Schema()
export class SectionIdentifierImpl implements SectionIdentifier {
  @Prop({
    type: String,
    required: false,
  })
  SectionType?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Id?: string | null;
}

@Schema()
export class DateTimeSovrenPrimitiveImpl implements DateTimeSovrenPrimitive {
  @Prop({
    type: String,
    required: false,
  })
  Value?: string;
}

@Schema()
export class ResumeSkillVariationImpl implements ResumeSkillVariation {
  @Prop({
    type: String,
    required: false,
  })
  Id?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Name?: string | null;

  @Prop({
    type: [SectionIdentifierImpl],
    required: false,
  })
  FoundIn?: SectionIdentifier[] | null;

  @Prop({
    type: Boolean,
    required: false,
  })
  ExistsInText?: boolean;

  @Prop({
    type: Int32SovrenPrimitiveImpl,
    required: false,
  })
  MonthsExperience?: Int32SovrenPrimitive;

  @Prop({
    type: DateTimeSovrenPrimitiveImpl,
    required: false,
  })
  LastUsed?: DateTimeSovrenPrimitive;
}

@Schema()
export class ResumeSkillImpl implements ResumeSkill {
  @Prop({
    type: String,
    required: false,
  })
  Id?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Name?: string | null;

  @Prop({
    type: [SectionIdentifierImpl],
    required: false,
  })
  FoundIn?: SectionIdentifier[] | null;

  @Prop({
    type: Boolean,
    required: false,
  })
  ExistsInText?: boolean;

  @Prop({
    type: String,
    required: false,
  })
  Type?: string | null;

  @Prop({
    type: ResumeSkillVariationImpl,
    required: false,
  })
  Variations?: ResumeSkillVariation[] | null;

  @Prop({
    type: Int32SovrenPrimitiveImpl,
    required: false,
  })
  MonthsExperience?: Int32SovrenPrimitive;

  @Prop({
    type: DateTimeSovrenPrimitiveImpl,
    required: false,
  })
  LastUsed?: DateTimeSovrenPrimitive;

  @Prop({
    type: Int32SovrenPrimitiveImpl,
    required: false,
  })
  ChildrenMonthsExperience?: Int32SovrenPrimitive;

  @Prop({
    type: DateTimeSovrenPrimitiveImpl,
    required: false,
  })
  ChildrenLastUsed?: DateTimeSovrenPrimitive;
}

@Schema()
export class ResumeSubTaxonomyImpl implements ResumeSubTaxonomy {
  @Prop({
    type: String,
    required: false,
  })
  SubTaxonomyId?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  SubTaxonomyName?: string | null;

  @Prop({
    type: Number,
    required: false,
  })
  PercentOfOverall?: number;

  @Prop({
    type: Number,
    required: false,
  })
  PercentOfParent?: number;

  @Prop({
    type: [ResumeSkillImpl],
    required: false,
  })
  Skills?: ResumeSkill[] | null;
}

@Schema()
export class ResumeTaxonomyImpl implements ResumeTaxonomy {
  @Prop({
    type: String,
    required: false,
  })
  Id?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Name?: string | null;

  @Prop({
    type: Number,
    required: false,
  })
  PercentOfOverall?: number;

  @Prop({
    type: [ResumeSubTaxonomyImpl],
    required: false,
  })
  SubTaxonomies?: ResumeSubTaxonomy[] | null;
}

@Schema()
export class ResumeTaxonomyRootImpl implements ResumeTaxonomyRoot {
  @Prop({
    type: String,
    required: false,
  })
  Root?: string | null;

  @Prop({
    type: [ResumeTaxonomyImpl],
    required: false,
  })
  Taxonomies?: ResumeTaxonomy[] | null;
}

@Schema()
export class V2RawSkillResumeImpl implements V2RawSkillResume {
  @Prop({
    type: String,
    required: false,
  })
  Name?: string | null;

  @Prop({
    type: [SectionIdentifierImpl],
    required: false,
  })
  FoundIn?: SectionIdentifier[] | null;

  @Prop({
    type: Int32SovrenPrimitiveImpl,
    required: false,
  })
  MonthsExperience?: Int32SovrenPrimitive;

  @Prop({
    type: DateTimeSovrenPrimitiveImpl,
    required: false,
  })
  LastUsed?: DateTimeSovrenPrimitive;
}

@Schema()
export class V2NormalizedSkillResumeImpl implements V2NormalizedSkillResume {
  @Prop({
    type: String,
    required: false,
  })
  Name?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Id?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Type?: string | null;

  @Prop({
    type: [SectionIdentifierImpl],
    required: false,
  })
  FoundIn?: SectionIdentifier[] | null;

  @Prop({
    type: Int32SovrenPrimitiveImpl,
    required: false,
  })
  MonthsExperience?: Int32SovrenPrimitive;

  @Prop({
    type: [DateTimeSovrenPrimitiveImpl],
    required: false,
  })
  LastUsed?: DateTimeSovrenPrimitive;

  @Prop({
    type: [String],
    required: false,
  })
  RawSkills?: string[] | null;
}

@Schema()
export class V2ProfessionGroupImpl implements V2ProfessionGroup {
  @Prop({
    type: String,
    required: false,
  })
  Name?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Id?: string | null;

  @Prop({
    type: Number,
    required: false,
  })
  Percent?: number;

  @Prop({
    type: [String],
    required: false,
  })
  NormalizedSkills?: string[] | null;
}

@Schema()
export class V2ProfessionClassImpl implements V2ProfessionClass {
  @Prop({
    type: String,
    required: false,
  })
  Name?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Id?: string | null;

  @Prop({
    type: Number,
    required: false,
  })
  Percent?: number;

  @Prop({
    type: [V2ProfessionGroupImpl],
    required: false,
  })
  Groups?: V2ProfessionGroup[] | null;
}

@Schema()
export class V2SkillsDataResumeImpl implements V2SkillsDataResume {
  @Prop({
    type: [V2RawSkillResumeImpl],
    required: false,
  })
  Raw?: V2RawSkillResume[] | null;

  @Prop({
    type: [V2NormalizedSkillResumeImpl],
    required: false,
  })
  Normalized?: V2NormalizedSkillResume[] | null;

  @Prop({
    type: [V2ProfessionClassImpl],
    required: false,
  })
  RelatedProfessionClasses?: V2ProfessionClass[] | null;
}

@Schema()
export class CertificationImpl implements Certification {
  @Prop({
    type: String,
    required: false,
  })
  Name?: string | null;

  @Prop({
    type: Boolean,
    required: false,
  })
  MatchedFromList?: boolean;

  @Prop({
    type: Boolean,
    required: false,
  })
  IsVariation?: boolean;
}

@Schema()
export class LicenseDetailImpl implements LicenseDetail {
  @Prop({
    type: String,
    required: false,
  })
  Name?: string | null;

  @Prop({
    type: Boolean,
    required: false,
  })
  MatchedFromList?: boolean;
}

@Schema()
export class MilitaryServiceImpl implements MilitaryService {
  @Prop({
    type: String,
    required: false,
  })
  Name?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Branch?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Rank?: string | null;
}

@Schema()
export class MilitaryDetailsImpl implements MilitaryDetails {
  @Prop({
    type: String,
    required: false,
  })
  Country?: string | null;

  @Prop({
    type: MilitaryServiceImpl,
    required: false,
  })
  Service?: MilitaryService;

  @Prop({
    type: SovrenDateWithPartsImpl,
    required: false,
  })
  StartDate?: SovrenDateWithParts;

  @Prop({
    type: SovrenDateWithPartsImpl,
    required: false,
  })
  EndDate?: SovrenDateWithParts;

  @Prop({
    type: String,
    required: false,
  })
  FoundInContext?: string | null;
}

@Schema()
export class SecurityCredentialImpl implements SecurityCredential {
  @Prop({
    type: String,
    required: false,
  })
  Name?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  FoundInContext?: string | null;
}

@Schema()
export class CandidateReferenceImpl implements CandidateReference {
  @Prop({
    type: PersonNameImpl,
    required: false,
  })
  ReferenceName?: PersonName;

  @Prop({
    type: String,
    required: false,
  })
  Title?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Company?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Type?: string | null;

  @Prop({
    type: SovrenLocationImpl,
    required: false,
  })
  Location?: SovrenLocation;

  @Prop({
    type: [NameValueImpl],
    required: false,
  })
  Telephones?: NameValue[] | null;

  @Prop({
    type: [String],
    required: false,
  })
  EmailAddresses?: string[] | null;

  @Prop({
    type: [WebAddressImpl],
    required: false,
  })
  WebAddresses?: WebAddress[] | null;
}

@Schema()
export class TrainingDetailImpl implements TrainingDetail {
  @Prop({
    type: String,
    required: false,
  })
  Text?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Entity?: string | null;

  @Prop({
    type: [String],
    required: false,
  })
  Qualifications?: string[] | null;

  @Prop({
    type: SovrenDateWithPartsImpl,
    required: false,
  })
  StartDate?: SovrenDateWithParts;

  @Prop({
    type: SovrenDateWithPartsImpl,
    required: false,
  })
  EndDate?: SovrenDateWithParts;
}

@Schema()
export class TrainingHistoryImpl implements TrainingHistory {
  @Prop({
    type: String,
    required: false,
  })
  Text?: string | null;

  @Prop({
    type: [TrainingDetailImpl],
    required: false,
  })
  Trainings?: TrainingDetail[] | null;
}

@Schema()
export class ResumeSectionImpl implements ResumeSection {
  @Prop({
    type: Number,
    required: false,
  })
  FirstLineNumber?: number;

  @Prop({
    type: Number,
    required: false,
  })
  LastLineNumber?: number;

  @Prop({
    type: String,
    required: false,
  })
  SectionType?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  HeaderTextFound?: string | null;
}

@Schema()
export class FindingImpl implements Finding {
  @Prop({
    type: String,
    required: false,
  })
  QualityCode?: string | null;

  @Prop({
    type: [SectionIdentifierImpl],
    required: false,
  })
  SectionIdentifiers?: SectionIdentifier[] | null;

  @Prop({
    type: String,
    required: false,
  })
  Message?: string | null;
}

@Schema()
export class ResumeQualityAssessmentImpl implements ResumeQualityAssessment {
  @Prop({
    type: String,
    required: false,
  })
  Level?: string | null;

  @Prop({
    type: [FindingImpl],
    required: false,
  })
  Findings?: Finding[] | null;
}

@Schema()
export class ReservedDataImpl implements ReservedData {
  Phones?: string[] | null;
  Names?: string[] | null;
  EmailAddresses?: string[] | null;
  Urls?: string[] | null;
  OtherData?: string[] | null;
}

@Schema()
export class ResumeMetadataImpl implements ResumeMetadata {
  @Prop({
    type: [ResumeSectionImpl],
    required: false,
  })
  FoundSections?: ResumeSection[] | null;

  @Prop({
    type: [ResumeQualityAssessmentImpl],
    required: false,
  })
  ResumeQuality?: ResumeQualityAssessment[] | null;

  @Prop({
    type: ReservedDataImpl,
    required: false,
  })
  ReservedData?: ReservedData;

  @Prop({
    type: String,
    required: false,
  })
  PlainText?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  DocumentLanguage?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  DocumentCulture?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  ParserSettings?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  DocumentLastModified?: string;
}
