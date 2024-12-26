import { Prop, Schema } from '@nestjs/mongoose';
import {
  ApplicationDetails,
  Association,
  BimetricMatchResult,
  BooleanSovrenPrimitive,
  Bullet,
  CandidateReference,
  CategoryScore,
  CategoryScoresContainer,
  CategoryWeights,
  Certification,
  CompanyName,
  ContactInformation,
  DateTimeSovrenPrimitive,
  Degree,
  EducationCategoryScore,
  EducationComparison,
  EducationDetails,
  EducationHistory,
  Employer,
  EmployerNames,
  EmploymentHistory,
  Evidence,
  EvidenceType,
  ExperienceSummary,
  Finding,
  GeoCoordinate,
  GradepointAverage,
  Int32NormalizedProfessionClassification,
  Int32SovrenPrimitive,
  Int32VersionedNormalizedProfessionClassification,
  JobDegree,
  JobSkill,
  JobSubTaxonomy,
  JobTaxonomy,
  JobTaxonomyRoot,
  JobTitle,
  JobTitleInfo,
  JobTitles,
  JobTitlesCategoryScore,
  LanguageCompetency,
  LicenseDetail,
  ManagementCategoryScore,
  ManagementLevelType,
  MilitaryDetails,
  MilitaryService,
  NameValue,
  NationalIdentity,
  NormalizedDegree,
  NormalizedProfession,
  PayRange,
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
  SimpleCategoryScore,
  SkillInfo,
  SkillsCategoryScore,
  SovrenDateWithParts,
  SovrenLocation,
  StringVersionedNormalizedProfessionClassification,
  TaxonomiesCategoryScore,
  TaxonomyEvidence,
  TaxonomyInfo,
  TaxonomyMatchInfo,
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
import { ResumeFormat, StorageType } from '../constants';
import { IFileMetaData, IStorage } from '../interfaces';

@Schema()
export class FileMetaData implements IFileMetaData {
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
export class Storage implements IStorage {
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

@Schema()
export class ApplicationDetailsImpl implements ApplicationDetails {
  @Prop({
    type: String,
    required: false,
  })
  ApplicationDescription?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  ContactPerson?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  ContactPhone?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  ContactEmail?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Website?: string | null;

  @Prop({
    type: DateTimeSovrenPrimitiveImpl,
    required: false,
  })
  ApplicationDeadline?: DateTimeSovrenPrimitive;

  @Prop({
    type: DateTimeSovrenPrimitiveImpl,
    required: false,
  })
  PostedDate?: DateTimeSovrenPrimitive;

  @Prop({
    type: String,
    required: false,
  })
  ReferenceNumber?: string | null;
}

@Schema()
export class JobTitlesImpl implements JobTitles {
  @Prop({
    type: String,
    required: false,
  })
  MainJobTitle?: string | null;

  @Prop({
    type: [String],
    required: false,
  })
  JobTitle?: string[] | null;

  @Prop({
    type: NormalizedProfessionImpl,
    required: false,
  })
  NormalizedProfession?: NormalizedProfession;
}

@Schema()
export class EmployerNamesImpl implements EmployerNames {
  @Prop({
    type: String,
    required: false,
  })
  MainEmployerName?: string | null;

  @Prop({
    type: [String],
    required: false,
  })
  EmployerName?: string[] | null;
}

@Schema()
export class JobDegreeImpl implements JobDegree {
  @Prop({
    type: String,
    required: false,
  })
  Name?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Type?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  LocalEducationLevel?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  InternationalEducationLevel?: string | null;
}

@Schema()
export class PayRangeImpl implements PayRange {
  @Prop({
    type: Int32SovrenPrimitiveImpl,
    required: false,
  })
  Minimum?: Int32SovrenPrimitive;

  @Prop({
    type: Int32SovrenPrimitiveImpl,
    required: false,
  })
  Maximum?: Int32SovrenPrimitive;

  @Prop({
    type: String,
    required: false,
  })
  RawMinimum?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  RawMaximum?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Currency?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  TimeScale?: string | null;
}

@Schema()
export class JobSubTaxonomyImpl implements JobSubTaxonomy {
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
    required: false,
  })
  Skills?: JobSkill[] | null;
}

@Schema()
export class JobTaxonomyImpl implements JobTaxonomy {
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
    type: [JobSubTaxonomyImpl],
    required: false,
  })
  SubTaxonomies?: JobSubTaxonomy[] | null;
}

@Schema()
export class JobTaxonomyRootImpl implements JobTaxonomyRoot {
  @Prop({
    type: String,
    required: false,
  })
  Root?: string | null;

  @Prop({
    type: [JobTaxonomyImpl],
    required: false,
  })
  Taxonomies?: JobTaxonomy[] | null;
}

@Schema()
export class CategoryScoreImpl implements CategoryScore {
  @Prop({
    type: String,
    required: false,
  })
  Category?: string | null;

  @Prop({
    type: Number,
    required: false,
  })
  UnweightedScore?: number;

  @Prop({
    type: [String],
    required: false,
  })
  TermsFound?: string[] | null;
}

@Schema()
export class EvidenceImpl implements Evidence {
  @Prop({
    type: String,
    required: false,
  })
  Fact?: string | null;

  @Prop({
    type: String,
    enum: EvidenceType,
    required: false,
  })
  Type?: EvidenceType;
}

@Schema()
export class SimpleCategoryScoreImpl implements SimpleCategoryScore {
  @Prop({
    type: [String],
    required: false,
  })
  Found?: string[] | null;

  @Prop({
    type: [String],
    required: false,
  })
  NotFound?: string[] | null;

  @Prop({
    type: Number,
    required: false,
  })
  UnweightedScore?: number;

  @Prop({
    type: [EvidenceImpl],
    required: false,
  })
  Evidence?: Evidence[] | null;
}

@Schema()
export class EducationCategoryScoreImpl implements EducationCategoryScore {
  @Prop({
    type: String,
    required: false,
  })
  ExpectedEducation?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  ActualEducation?: string | null;

  @Prop({
    type: String,
    enum: EducationComparison,
    required: false,
  })
  Comparison?: EducationComparison;

  @Prop({
    type: Number,
    required: false,
  })
  UnweightedScore?: number;

  @Prop({
    type: [EvidenceImpl],
    required: false,
  })
  Evidence?: Evidence[] | null;
}

@Schema()
export class TaxonomyMatchInfoImpl implements TaxonomyMatchInfo {
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
    type: Boolean,
    required: false,
  })
  Matched?: boolean;
}

@Schema()
export class TaxonomyInfoImpl implements TaxonomyInfo {
  @Prop({
    type: TaxonomyMatchInfoImpl,
    required: false,
  })
  Taxonomy?: TaxonomyMatchInfo;

  @Prop({
    type: TaxonomyMatchInfoImpl,
    required: false,
  })
  Subtaxonomy?: TaxonomyMatchInfo;
}

@Schema()
export class TaxonomyEvidenceImpl implements TaxonomyEvidence {
  @Prop({
    type: TaxonomyInfoImpl,
    required: false,
  })
  Primary?: TaxonomyInfo;

  @Prop({
    type: TaxonomyInfoImpl,
    required: false,
  })
  Secondary?: TaxonomyInfo;
}

@Schema()
export class TaxonomiesCategoryScoreImpl implements TaxonomiesCategoryScore {
  @Prop({
    type: TaxonomyEvidenceImpl,
    required: false,
  })
  ActualTaxonomies?: TaxonomyEvidence;

  @Prop({
    type: TaxonomyEvidenceImpl,
    required: false,
  })
  DesiredTaxonomies?: TaxonomyEvidence;

  @Prop({
    type: Number,
    required: false,
  })
  UnweightedScore?: number;

  @Prop({
    type: [EvidenceImpl],
    required: false,
  })
  Evidence?: Evidence[] | null;
}

@Schema()
export class JobTitleInfoImpl implements JobTitleInfo {
  @Prop({
    type: String,
    required: false,
  })
  RawTerm?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  VariationOf?: string | null;

  @Prop({
    type: Boolean,
    required: false,
  })
  IsCurrent?: boolean;
}

@Schema()
export class JobTitlesCategoryScoreImpl implements JobTitlesCategoryScore {
  @Prop({
    type: [JobTitleInfoImpl],
    required: false,
  })
  Found?: JobTitleInfo[] | null;

  @Prop({
    type: [String],
    required: false,
  })
  NotFound?: string[] | null;

  @Prop({
    type: Number,
    required: false,
  })
  UnweightedScore?: number;

  @Prop({
    type: [EvidenceImpl],
    required: false,
  })
  Evidence?: Evidence[] | null;
}

@Schema()
export class SkillInfoImpl implements SkillInfo {
  @Prop({
    type: String,
    required: false,
  })
  Skill?: string | null;

  @Prop({
    type: Boolean,
    required: false,
  })
  IsCurrent?: boolean;
}

@Schema()
export class SkillsCategoryScoreImpl implements SkillsCategoryScore {
  @Prop({
    type: [EvidenceImpl],
    required: false,
  })
  Found?: SkillInfo[] | null;

  @Prop({
    type: [String],
    required: false,
  })
  NotFound?: string[] | null;

  @Prop({
    type: Number,
    required: false,
  })
  UnweightedScore?: number;

  @Prop({
    type: [EvidenceImpl],
    required: false,
  })
  Evidence?: Evidence[] | null;
}

@Schema()
export class ManagementCategoryScoreImpl implements ManagementCategoryScore {
  @Prop({
    type: String,
    enum: ManagementLevelType,
    required: false,
  })
  Actual?: ManagementLevelType;

  @Prop({
    type: String,
    enum: ManagementLevelType,
    required: false,
  })
  Desired?: ManagementLevelType;

  @Prop({
    type: Boolean,
    required: false,
  })
  AmountOfExperienceMatches?: boolean;

  @Prop({
    type: Number,
    required: false,
  })
  UnweightedScore?: number;

  @Prop({
    type: [EvidenceImpl],
    required: false,
  })
  Evidence?: Evidence[] | null;
}

@Schema()
export class CategoryScoresContainerImpl implements CategoryScoresContainer {
  @Prop({
    type: SimpleCategoryScoreImpl,
    required: false,
  })
  Languages?: SimpleCategoryScore;

  @Prop({
    type: SimpleCategoryScoreImpl,
    required: false,
  })
  Certifications?: SimpleCategoryScore;

  @Prop({
    type: SimpleCategoryScoreImpl,
    required: false,
  })
  ExecutiveType?: SimpleCategoryScore;

  @Prop({
    type: EducationCategoryScoreImpl,
    required: false,
  })
  Education?: EducationCategoryScore;

  @Prop({
    type: TaxonomiesCategoryScoreImpl,
    required: false,
  })
  Taxonomies?: TaxonomiesCategoryScore;

  @Prop({
    type: JobTitlesCategoryScoreImpl,
    required: false,
  })
  JobTitles?: JobTitlesCategoryScore;

  @Prop({
    type: SkillsCategoryScoreImpl,
    required: false,
  })
  Skills?: SkillsCategoryScore;

  @Prop({
    type: ManagementCategoryScoreImpl,
    required: false,
  })
  ManagementLevel?: ManagementCategoryScore;
}

@Schema()
export class BimetricMatchResultImpl implements BimetricMatchResult {
  @Prop({
    type: String,
    required: false,
  })
  Id?: string | null;

  @Prop({
    type: Number,
    required: false,
  })
  WeightedScore?: number;

  @Prop({
    type: [CategoryScoreImpl],
    required: false,
  })
  UnweightedCategoryScores?: CategoryScore[] | null;

  @Prop({
    type: CategoryScoresContainerImpl,
    required: false,
  })
  EnrichedScoreData?: CategoryScoresContainer;

  @Prop({
    type: CategoryScoresContainerImpl,
    required: false,
  })
  EnrichedRCSScoreData?: CategoryScoresContainer;

  @Prop({
    type: Number,
    required: false,
  })
  ReverseCompatibilityScore?: number;

  @Prop({
    type: Number,
    required: false,
  })
  SovScore?: number;
}

@Schema()
export class CategoryWeightsImpl implements CategoryWeights {
  @Prop({
    type: Number,
    required: false,
  })
  Education?: number;

  @Prop({
    type: Number,
    required: false,
  })
  JobTitles?: number;

  @Prop({
    type: Number,
    required: false,
  })
  Skills?: number;

  @Prop({
    type: Number,
    required: false,
  })
  Industries?: number;

  @Prop({
    type: Number,
    required: false,
  })
  Languages?: number;

  @Prop({
    type: Number,
    required: false,
  })
  Certifications?: number;

  @Prop({
    type: Number,
    required: false,
  })
  ExecutiveType?: number;

  @Prop({
    type: Number,
    required: false,
  })
  ManagementLevel?: number;

  @Prop({
    type: Boolean,
    required: false,
  })
  EducationHasData?: boolean;

  @Prop({
    type: Boolean,
    required: false,
  })
  JobTitlesHasData?: boolean;

  @Prop({
    type: Boolean,
    required: false,
  })
  SkillsHasData?: boolean;

  @Prop({
    type: Boolean,
    required: false,
  })
  IndustriesHasData?: boolean;

  @Prop({
    type: Boolean,
    required: false,
  })
  LanguagesHasData?: boolean;

  @Prop({
    type: Boolean,
    required: false,
  })
  CertificationsHasData?: boolean;

  @Prop({
    type: Boolean,
    required: false,
  })
  ExecutiveTypeHasData?: boolean;

  @Prop({
    type: Boolean,
    required: false,
  })
  ManagementLevelHasData?: boolean;
}
