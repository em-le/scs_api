/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AddJobToIndexRequestModel {
  JobData?: JobData;
  UserDefinedTags?: string[] | null;
}

export interface AddMultipleJobsToIndexRequestModel {
  Jobs?: IndexJobRequest[] | null;
}

export interface AddMultipleResumesToIndexRequestModel {
  Resumes?: IndexResumeRequest[] | null;
}

export interface AddResumeToIndexRequestModel {
  ResumeData?: ResumeData;
  UserDefinedTags?: string[] | null;
}

export interface ApplicationDetails {
  ApplicationDescription?: string | null;
  ContactPerson?: string | null;
  ContactPhone?: string | null;
  ContactEmail?: string | null;
  Website?: string | null;
  ApplicationDeadline?: DateTimeSovrenPrimitive;
  PostedDate?: DateTimeSovrenPrimitive;
  ReferenceNumber?: string | null;
}

export interface Association {
  Organization?: string | null;
  Role?: string | null;
  FoundInContext?: string | null;
}

export interface AutoCompleteProfession {
  Description?: string | null;
  /** @format int32 */
  CodeId?: number;
}

export interface AutoCompleteProfessionsResponse {
  Professions?: AutoCompleteProfession[] | null;
}

export interface AutoCompleteProfessionsResponseStructuredResponseModel {
  Info?: StructuredResponseInfoModel;
  Value?: AutoCompleteProfessionsResponse;
}

export interface AutoCompleteSkill {
  Description?: string | null;
  Id?: string | null;
  Type?: string | null;
}

export interface AutoCompleteSkillsResponse {
  Skills?: AutoCompleteSkill[] | null;
}

export interface AutoCompleteSkillsResponseStructuredResponseModel {
  Info?: StructuredResponseInfoModel;
  Value?: AutoCompleteSkillsResponse;
}

export interface BimetricMatchResult {
  Id?: string | null;
  /** @format int32 */
  WeightedScore?: number;
  UnweightedCategoryScores?: CategoryScore[] | null;
  EnrichedScoreData?: CategoryScoresContainer;
  EnrichedRCSScoreData?: CategoryScoresContainer;
  /** @format int32 */
  ReverseCompatibilityScore?: number;
  /** @format int32 */
  SovScore?: number;
}

export interface BooleanSovrenPrimitive {
  Value?: boolean;
}

export interface BulkDeleteRequestModel {
  DocumentIds?: string[] | null;
}

export interface BulkDocumentResponse {
  DocumentId?: string | null;
  Code?: string | null;
  SubCode?: string | null;
  Message?: string | null;
}

export interface BulkDocumentResponseListStructuredResponseModel {
  Info?: StructuredResponseInfoModel;
  Value?: BulkDocumentResponse[] | null;
}

export interface Bullet {
  Type?: string | null;
  Text?: string | null;
}

export interface ByteArrayStructuredResponseModel {
  Info?: StructuredResponseInfoModel;
  /** @format byte */
  Value?: string | null;
}

export interface CandidateReference {
  ReferenceName?: PersonName;
  Title?: string | null;
  Company?: string | null;
  Type?: string | null;
  Location?: SovrenLocation;
  Telephones?: NameValue[] | null;
  EmailAddresses?: string[] | null;
  WebAddresses?: WebAddress[] | null;
}

export interface CategoryScore {
  Category?: string | null;
  /** @format double */
  UnweightedScore?: number;
  TermsFound?: string[] | null;
}

export interface CategoryScoresContainer {
  Languages?: SimpleCategoryScore;
  Certifications?: SimpleCategoryScore;
  ExecutiveType?: SimpleCategoryScore;
  Education?: EducationCategoryScore;
  Taxonomies?: TaxonomiesCategoryScore;
  JobTitles?: JobTitlesCategoryScore;
  Skills?: SkillsCategoryScore;
  ManagementLevel?: ManagementCategoryScore;
}

export interface CategoryWeight {
  Category?: string | null;
  /** @format double */
  Weight?: number;
}

export interface CategoryWeights {
  /** @format double */
  Education?: number;
  /** @format double */
  JobTitles?: number;
  /** @format double */
  Skills?: number;
  /** @format double */
  Industries?: number;
  /** @format double */
  Languages?: number;
  /** @format double */
  Certifications?: number;
  /** @format double */
  ExecutiveType?: number;
  /** @format double */
  ManagementLevel?: number;
  EducationHasData?: boolean;
  JobTitlesHasData?: boolean;
  SkillsHasData?: boolean;
  IndustriesHasData?: boolean;
  LanguagesHasData?: boolean;
  CertificationsHasData?: boolean;
  ExecutiveTypeHasData?: boolean;
  ManagementLevelHasData?: boolean;
}

export interface Certification {
  Name?: string | null;
  MatchedFromList?: boolean;
  IsVariation?: boolean;
}

export interface CompanyInfo {
  CompanyName?: string | null;
  Phone?: string | null;
  Email?: string | null;
  CandidateId?: string | null;
  Logo?: ResumeLogo;
  Footer?: string | null;
  Placement?: CompanyInfoPlacement;
}

export enum CompanyInfoPlacement {
  FirstHeader = 'FirstHeader',
  AllHeaders = 'AllHeaders',
}

export interface CompanyName {
  Probability?: string | null;
  Raw?: string | null;
  Normalized?: string | null;
}

export interface CompareSkillsRequest {
  ProfessionCodeIds?: number[] | null;
  ProfessionACodeId?: string | null;
  ProfessionBCodeId?: string | null;
  OutputLanguage?: string | null;
}

export interface CompareSkillsResponse {
  /** @format float */
  SimilarityScore?: number;
  CommonSkills?: SkillScore[] | null;
  ExclusiveSkillsByProfession?: ProfessionExclusiveSkills[] | null;
}

export interface CompareSkillsResponseStructuredResponseModel {
  Info?: StructuredResponseInfoModel;
  Value?: CompareSkillsResponse;
}

export interface CompareSkillsToProfessionsRequest {
  SkillIds?: string[] | null;
  Skills?: SkillScore[] | null;
  /** @format int32 */
  ProfessionCodeId?: number;
  OutputLanguage?: string | null;
}

export interface CompareSkillsToProfessionsResponse {
  /** @format float */
  SimilarityScore?: number;
  CommonSkills?: SkillScore[] | null;
  InputSkillsNotInProfession?: string[] | null;
  MissingSkillsFoundInProfession?: SkillScore[] | null;
}

export interface CompareSkillsToProfessionsResponseStructuredResponseModel {
  Info?: StructuredResponseInfoModel;
  Value?: CompareSkillsToProfessionsResponse;
}

export interface ContactInformation {
  CandidateName?: PersonName;
  Telephones?: Telephone[] | null;
  EmailAddresses?: string[] | null;
  Location?: SovrenLocation;
  WebAddresses?: WebAddress[] | null;
}

export interface ConversionMetadata {
  DetectedType?: string | null;
  SuggestedFileExtension?: string | null;
  OutputValidityCode?: string | null;
  /** @format int32 */
  ElapsedMilliseconds?: number;
  DocumentHash?: string | null;
}

export interface Conversions {
  /** @format byte */
  PDF?: string | null;
  HTML?: string | null;
  RTF?: string | null;
  /** @format byte */
  CandidateImage?: string | null;
  CandidateImageExtension?: string | null;
}

export interface CreateIndexRequestModel {
  IndexType?: string | null;
}

export interface CreateNormalizationRequest {
  Name?: string | null;
  Culture?: string | null;
  /** @format byte */
  ContentBytes?: string | null;
}

export interface CreateSkillRequest {
  Name?: string | null;
  Culture?: string | null;
  Content?: string[] | null;
}

export interface CustomerDetails {
  AccountId?: string | null;
  Name?: string | null;
  IPAddress?: string | null;
  Region?: string | null;
  /** @format double */
  CreditsRemaining?: number;
  /** @format int32 */
  CreditsUsed?: number;
  /** @format date */
  ExpirationDate?: string | null;
  /** @format int32 */
  MaximumConcurrentRequests?: number;
}

export interface DateTimeSovrenPrimitive {
  /** @format date */
  Value?: string;
}

export interface Degree {
  Name?: NameValue;
  Type?: string | null;
  NormalizedLocal?: NormalizedDegree;
  NormalizedInternational?: NormalizedDegree;
}

export enum DistanceUnit {
  Miles = 'Miles',
  Kilometers = 'Kilometers',
}

export interface Education {
  SchoolName?: string | null;
  DegreeMajor?: string | null;
  DegreeName?: string | null;
  DegreeType?: string | null;
  /** @format double */
  MinimumGPA?: number;
}

export interface EducationCategoryScore {
  ExpectedEducation?: string | null;
  ActualEducation?: string | null;
  Comparison?: EducationComparison;
  /** @format double */
  UnweightedScore?: number;
  Evidence?: Evidence[] | null;
}

export enum EducationComparison {
  DoesNotMeetExpected = 'DoesNotMeetExpected',
  MeetsExpected = 'MeetsExpected',
  ExceedsExpected = 'ExceedsExpected',
}

export interface EducationDetails {
  Id?: string | null;
  Text?: string | null;
  SchoolName?: NameValue;
  SchoolType?: string | null;
  Location?: SovrenLocation;
  Degree?: Degree;
  Majors?: string[] | null;
  Minors?: string[] | null;
  GPA?: GradepointAverage;
  LastEducationDate?: SovrenDateWithParts;
  StartDate?: SovrenDateWithParts;
  EndDate?: SovrenDateWithParts;
  Graduated?: BooleanSovrenPrimitive;
}

export interface EducationHistory {
  HighestDegree?: Degree;
  EducationDetails?: EducationDetails[] | null;
}

export interface Employer {
  Name?: CompanyName;
  OtherFoundName?: NameValue;
  Location?: SovrenLocation;
}

export enum EmployerNameOptions {
  ShowAll = 'ShowAll',
  HideAll = 'HideAll',
  HideRecentAndCurrent = 'HideRecentAndCurrent',
}

export interface EmployerNames {
  MainEmployerName?: string | null;
  EmployerName?: string[] | null;
}

export interface EmploymentHistory {
  ExperienceSummary?: ExperienceSummary;
  Positions?: Position[] | null;
}

export interface EnrichmentMetadata {
  ProfessionNormalization?: ProfessionNormalizationMetadata;
  Skills?: SkillsMetadata;
}

export interface Evidence {
  Fact?: string | null;
  Type?: EvidenceType;
}

export enum EvidenceType {
  Negative = 'Negative',
  Mixed = 'Mixed',
  Positive = 'Positive',
}

export enum ExperienceLevel {
  Unknown = 'Unknown',
  Low = 'Low',
  Mid = 'Mid',
  High = 'High',
}

export interface ExperienceSummary {
  Description?: string | null;
  /** @format int32 */
  MonthsOfWorkExperience?: number;
  /** @format int32 */
  MonthsOfManagementExperience?: number;
  ExecutiveType?: string | null;
  /** @format int32 */
  AverageMonthsPerEmployer?: number;
  /** @format int32 */
  FulltimeDirectHirePredictiveIndex?: number;
  ManagementStory?: string | null;
  CurrentManagementLevel?: string | null;
  /** @format int32 */
  ManagementScore?: number;
  AttentionNeeded?: string | null;
}

export interface ExtractSkillsRequest {
  Text?: string | null;
  Language?: string | null;
  /** @format float */
  Threshold?: number;
  OutputLanguage?: string | null;
}

export interface ExtractSkillsResponse {
  Truncated?: boolean;
  Skills?: ExtractedSkill[] | null;
}

export interface ExtractSkillsResponseStructuredResponseModel {
  Info?: StructuredResponseInfoModel;
  Value?: ExtractSkillsResponse;
}

export interface ExtractedSkill {
  Matches?: SkillMatch[] | null;
  Type?: string | null;
  Id?: string | null;
  /** @format float */
  Confidence?: number;
  Description?: string | null;
  IsoCode?: string | null;
}

export interface Finding {
  QualityCode?: string | null;
  SectionIdentifiers?: SectionIdentifier[] | null;
  Message?: string | null;
}

export interface FlexRequest {
  Prompt?: string | null;
  Identifier?: string | null;
  DataType?: string | null;
  EnumerationValues?: string[] | null;
}

export interface FlexRequestResponse {
  Code?: string | null;
  Message?: string | null;
  Responses?: FlexibleReponse[] | null;
}

export interface FlexibleReponse {
  Identifier?: string | null;
  Reply?: string | null;
  ReplyList?: string[] | null;
}

export interface FormatResumeOptions {
  OutputType?: ResumeType;
  CompanyInfo?: CompanyInfo;
  WorkHistory?: WorkHistoryOptions;
  Metadata?: MetadataOptions;
}

export interface FormatResumeResponse {
  DocumentAsBase64String?: string | null;
}

export interface FormatResumeResponseStructuredResponseModel {
  Info?: StructuredResponseInfoModel;
  Value?: FormatResumeResponse;
}

export interface GenerateJobRequest {
  JobTitle?: string | null;
  Skills?: GenerateJobSkill[] | null;
  Tone?: string | null;
  Language?: string | null;
  Location?: string | null;
  Organization?: string | null;
}

export interface GenerateJobResponse {
  JobDescription?: string | null;
}

export interface GenerateJobResponseStructuredResponseModel {
  Info?: StructuredResponseInfoModel;
  Value?: GenerateJobResponse;
}

export interface GenerateJobSkill {
  Name?: string | null;
  Priority?: string | null;
}

export interface GeoCodeJobRequest {
  JobData?: JobData;
  Provider?: string | null;
  ProviderKey?: string | null;
  PostalAddress?: PostalAddress;
  GeoCoordinates?: GeoCoordinates;
}

export interface GeoCodeOptions {
  IncludeGeocoding?: boolean;
  Provider?: string | null;
  ProviderKey?: string | null;
  PostalAddress?: PostalAddress;
  GeoCoordinates?: GeoCoordinates;
}

export interface GeoCodeOptionsBase {
  Provider?: string | null;
  ProviderKey?: string | null;
  PostalAddress?: PostalAddress;
  GeoCoordinates?: GeoCoordinates;
}

export enum GeoCodeProvider {
  None = 'None',
  Google = 'Google',
  Bing = 'Bing',
}

export interface GeoCodeResumeRequest {
  ResumeData?: ResumeData;
  Provider?: string | null;
  ProviderKey?: string | null;
  PostalAddress?: PostalAddress;
  GeoCoordinates?: GeoCoordinates;
}

export interface GeoCoordinate {
  /** @format double */
  Latitude?: number;
  /** @format double */
  Longitude?: number;
  Source?: string | null;
}

export interface GeoCoordinates {
  /** @format float */
  Latitude?: number;
  /** @format float */
  Longitude?: number;
}

export interface GeoPoint {
  /** @format float */
  Latitude?: number;
  /** @format float */
  Longitude?: number;
  Source?: string | null;
  RawGeoCodeResponse?: string | null;
}

export interface GeocodeAndIndexJobRequest {
  IndexIfGeocodeFails?: boolean;
  GeocodeOptions?: GeoCodeOptionsBase;
  IndexingOptions?: StructuredIndexingOptions;
  JobData?: JobData;
}

export interface GeocodeAndIndexJobResponse {
  JobData?: JobData;
  GeocodeResponse?: ResponseInfoModel;
  IndexingResponse?: ResponseInfoModel;
}

export interface GeocodeAndIndexJobResponseStructuredResponseModel {
  Info?: StructuredResponseInfoModel;
  Value?: GeocodeAndIndexJobResponse;
}

export interface GeocodeAndIndexResumeRequest {
  ResumeData?: ResumeData;
  IndexIfGeocodeFails?: boolean;
  GeocodeOptions?: GeoCodeOptionsBase;
  IndexingOptions?: StructuredIndexingOptions;
}

export interface GeocodeAndIndexResumeResponse {
  ResumeData?: ResumeData;
  GeocodeResponse?: ResponseInfoModel;
  IndexingResponse?: ResponseInfoModel;
}

export interface GeocodeAndIndexResumeResponseStructuredResponseModel {
  Info?: StructuredResponseInfoModel;
  Value?: GeocodeAndIndexResumeResponse;
}

export interface GradepointAverage {
  Score?: string | null;
  ScoringSystem?: string | null;
  MaxScore?: string | null;
  MinimumScore?: string | null;
  /** @format double */
  NormalizedScore?: number;
}

export interface IndexDetail {
  OwnerId?: string | null;
  Name?: string | null;
  IndexType?: IndexTypes;
}

export interface IndexDetailListStructuredResponseModel {
  Info?: StructuredResponseInfoModel;
  Value?: IndexDetail[] | null;
}

export interface IndexJobRequest {
  JobData?: JobData;
  DocumentId?: string | null;
  UserDefinedTags?: string[] | null;
}

export interface IndexResumeRequest {
  ResumeData?: ResumeData;
  DocumentId?: string | null;
  UserDefinedTags?: string[] | null;
}

export enum IndexTypes {
  Resume = 'Resume',
  Job = 'Job',
}

export interface Int32LookupGroupOrClassInfo {
  /** @format int32 */
  CodeId?: number;
  Description?: string | null;
}

export interface Int32NormalizedProfessionClassification {
  /** @format int32 */
  CodeId?: number;
  Description?: string | null;
}

export interface Int32Range {
  /** @format int32 */
  Minimum?: number;
  /** @format int32 */
  Maximum?: number;
}

export interface Int32SovrenPrimitive {
  /** @format int32 */
  Value?: number;
}

export interface Int32VersionedNormalizedProfessionClassification {
  Version?: string | null;
  /** @format int32 */
  CodeId?: number;
  Description?: string | null;
}

export interface IntegerRange {
  /** @format int32 */
  Minimum?: number;
  /** @format int32 */
  Maximum?: number;
}

export interface JobBimetricMatchRequest {
  SourceJob?: StructuredParsedJob;
  TargetResumes?: StructuredParsedResume[] | null;
  TargetJobs?: StructuredParsedJob[] | null;
  Settings?: MatchSettings;
  PreferredCategoryWeights?: CategoryWeights;
}

export interface JobData {
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

export interface JobDataStructuredResponseModel {
  Info?: StructuredResponseInfoModel;
  Value?: JobData;
}

export interface JobDegree {
  Name?: string | null;
  Type?: string | null;
  LocalEducationLevel?: string | null;
  InternationalEducationLevel?: string | null;
}

export interface JobGeocoderResponseModel {
  JobData?: JobData;
}

export interface JobGeocoderResponseModelStructuredResponseModel {
  Info?: StructuredResponseInfoModel;
  Value?: JobGeocoderResponseModel;
}

export interface JobMetadata {
  PlainText?: string | null;
  DocumentLanguage?: string | null;
  DocumentCulture?: string | null;
  ParserSettings?: string | null;
  /** @format date */
  DocumentLastModified?: string;
}

export interface JobParsingTransaction {
  ParsingResponse?: ResponseInfoModel;
  GeocodeResponse?: ResponseInfoModel;
  IndexingResponse?: ResponseInfoModel;
  JobData?: JobData;
  ProfessionNormalizationResponse?: ResponseInfoModel;
  ConversionMetadata?: ConversionMetadata;
  Conversions?: Conversions;
  ParsingMetadata?: ParsingMetadata;
}

export interface JobParsingTransactionStructuredResponseModel {
  Info?: StructuredResponseInfoModel;
  Value?: JobParsingTransaction;
}

export interface JobSkill {
  Id?: string | null;
  Name?: string | null;
  FoundIn?: SectionIdentifier[] | null;
  ExistsInText?: boolean;
  Type?: string | null;
  Required?: boolean;
  Variations?: JobSkillVariation[] | null;
}

export interface JobSkillVariation {
  Id?: string | null;
  Name?: string | null;
  FoundIn?: SectionIdentifier[] | null;
  ExistsInText?: boolean;
  Required?: boolean;
}

export interface JobSubTaxonomy {
  SubTaxonomyId?: string | null;
  SubTaxonomyName?: string | null;
  /** @format int32 */
  PercentOfOverall?: number;
  /** @format int32 */
  PercentOfParent?: number;
  Skills?: JobSkill[] | null;
}

export interface JobSuggestSkillsRequest {
  JobTitle?: string | null;
  Language?: string | null;
  Limit?: string | null;
}

export interface JobSuggestSkillsResponse {
  SuggestedSkills?: string[] | null;
}

export interface JobSuggestSkillsResponseStructuredResponseModel {
  Info?: StructuredResponseInfoModel;
  Value?: JobSuggestSkillsResponse;
}

export interface JobTaxonomy {
  Id?: string | null;
  Name?: string | null;
  /** @format int32 */
  PercentOfOverall?: number;
  SubTaxonomies?: JobSubTaxonomy[] | null;
}

export interface JobTaxonomyRoot {
  Root?: string | null;
  Taxonomies?: JobTaxonomy[] | null;
}

export interface JobTitle {
  Raw?: string | null;
  Normalized?: string | null;
  Probability?: string | null;
  Variations?: string[] | null;
}

export interface JobTitleInfo {
  RawTerm?: string | null;
  VariationOf?: string | null;
  IsCurrent?: boolean;
}

export interface JobTitleSlim {
  Title?: string | null;
  IsCurrent?: boolean;
}

export interface JobTitles {
  MainJobTitle?: string | null;
  JobTitle?: string[] | null;
  NormalizedProfession?: NormalizedProfession;
}

export interface JobTitlesCategoryScore {
  Found?: JobTitleInfo[] | null;
  NotFound?: string[] | null;
  /** @format double */
  UnweightedScore?: number;
  Evidence?: Evidence[] | null;
}

export interface LanguageCompetency {
  Language?: string | null;
  LanguageCode?: string | null;
  FoundInContext?: string | null;
}

export interface LicenseDetail {
  Name?: string | null;
  MatchedFromList?: boolean;
}

export interface Location {
  CountryCode?: string | null;
  Region?: string | null;
  Municipality?: string | null;
  PostalCode?: string | null;
  GeoPoint?: GeoPoint;
}

export interface LocationCriteria {
  Locations?: Location[] | null;
  /** @format double */
  Distance?: number;
  GeocodeProvider?: GeoCodeProvider;
  DistanceUnit?: DistanceUnit;
  GeocodeProviderKey?: string | null;
}

export interface LookupProfession {
  /** @format int32 */
  CodeId?: number;
  Description?: string | null;
  Group?: Int32LookupGroupOrClassInfo;
  Class?: Int32LookupGroupOrClassInfo;
  Onet?: StringLookupGroupOrClassInfo;
  Isco?: StringLookupGroupOrClassInfo;
  Onet2019?: StringLookupGroupOrClassInfo;
  Kldb2020?: StringLookupGroupOrClassInfo;
  UwvBoc?: StringLookupGroupOrClassInfo;
  UkSoc2010?: StringLookupGroupOrClassInfo;
}

export interface LookupProfessionCodesRequest {
  CodeIds?: number[] | null;
  OutputLanguage?: string | null;
}

export interface LookupProfessionCodesResponse {
  Professions?: LookupProfession[] | null;
}

export interface LookupProfessionCodesResponseStructuredResponseModel {
  Info?: StructuredResponseInfoModel;
  Value?: LookupProfessionCodesResponse;
}

export interface LookupSkillCodesRequest {
  SkillIds?: string[] | null;
  OutputLanguage?: string | null;
}

export interface LookupSkillCodesResponse {
  Skills?: SkillCode[] | null;
}

export interface LookupSkillCodesResponseStructuredResponseModel {
  Info?: StructuredResponseInfoModel;
  Value?: LookupSkillCodesResponse;
}

export interface ManagementCategoryScore {
  Actual?: ManagementLevelType;
  Desired?: ManagementLevelType;
  AmountOfExperienceMatches?: boolean;
  /** @format double */
  UnweightedScore?: number;
  Evidence?: Evidence[] | null;
}

export enum ManagementLevelType {
  Unknown = 'Unknown',
  None = 'None',
  Low = 'Low',
  Mid = 'Mid',
  High = 'High',
}

export interface MatchJobRequest {
  JobData?: JobData;
  PreferredCategoryWeights?: CategoryWeights;
  CategoryWeights?: CategoryWeight[] | null;
  /** @format int32 */
  Take?: number;
  FilterCriteria?: StructuredFilterCriteria;
  Settings?: MatchSettings;
  IndexIdsToSearchInto?: string[] | null;
}

export interface MatchResult {
  Id?: string | null;
  /** @format int32 */
  WeightedScore?: number;
  UnweightedCategoryScores?: CategoryScore[] | null;
  EnrichedScoreData?: CategoryScoresContainer;
  EnrichedRCSScoreData?: CategoryScoresContainer;
  /** @format int32 */
  ReverseCompatibilityScore?: number;
  IndexId?: string | null;
  /** @format int32 */
  SovScore?: number;
}

export interface MatchResumeRequest {
  ResumeData?: ResumeData;
  PreferredCategoryWeights?: CategoryWeights;
  CategoryWeights?: CategoryWeight[] | null;
  /** @format int32 */
  Take?: number;
  FilterCriteria?: StructuredFilterCriteria;
  Settings?: MatchSettings;
  IndexIdsToSearchInto?: string[] | null;
}

export interface MatchSettings {
  PositionTitlesMustHaveAnExactMatch?: boolean;
  PositionTitlesIgnoreSingleWordVariations?: boolean;
  NormalizeJobTitles?: boolean;
  NormalizeJobTitlesLanguage?: string | null;
}

export interface MetadataOptions {
  HideCandidateSummary?: boolean;
  HideTopSkills?: boolean;
}

export interface MilitaryDetails {
  Country?: string | null;
  Service?: MilitaryService;
  StartDate?: SovrenDateWithParts;
  EndDate?: SovrenDateWithParts;
  FoundInContext?: string | null;
}

export interface MilitaryService {
  Name?: string | null;
  Branch?: string | null;
  Rank?: string | null;
}

export interface NameValue {
  Raw?: string | null;
  Normalized?: string | null;
}

export interface NationalIdentity {
  Number?: string | null;
  Phrase?: string | null;
}

export interface NormalizationResponseModel {
  Key?: string | null;
  Name?: string | null;
  Timestamp?: string | null;
}

export interface NormalizationResponseModelArrayStructuredResponseModel {
  Info?: StructuredResponseInfoModel;
  Value?: NormalizationResponseModel[] | null;
}

export interface NormalizationResponseModelStructuredResponseModel {
  Info?: StructuredResponseInfoModel;
  Value?: NormalizationResponseModel;
}

export interface NormalizeProfessionsRequest {
  JobTitles?: string[] | null;
  Language?: string | null;
  OutputLanguage?: string | null;
}

export interface NormalizeSkill {
  RawText?: string | null;
  Type?: string | null;
  Id?: string | null;
  /** @format float */
  Confidence?: number;
  Description?: string | null;
  IsoCode?: string | null;
}

export interface NormalizeSkillsRequest {
  Skills?: string[] | null;
  Language?: string | null;
  OutputLanguage?: string | null;
}

export interface NormalizeSkillsResponse {
  Skills?: NormalizeSkill[] | null;
}

export interface NormalizeSkillsResponseStructuredResponseModel {
  Info?: StructuredResponseInfoModel;
  Value?: NormalizeSkillsResponse;
}

export interface NormalizedDegree {
  Code?: string | null;
  Description?: string | null;
}

export interface NormalizedProfession {
  Profession?: Int32NormalizedProfessionClassification;
  Group?: Int32NormalizedProfessionClassification;
  Class?: Int32NormalizedProfessionClassification;
  ISCO?: Int32VersionedNormalizedProfessionClassification;
  ONET?: StringVersionedNormalizedProfessionClassification;
  /** @format float */
  Confidence?: number;
}

export interface ObjectStructuredResponseModel {
  Info?: StructuredResponseInfoModel;
  Value?: any;
}

export interface PaginationSettings {
  /** @format int32 */
  Skip?: number;
  /** @format int32 */
  Take?: number;
}

export interface ParseJobOrderConfiguration {
  CountryCode?: string | null;
  Language?: string | null;
  KnownType?: string | null;
  IncludeRecruitingTerms?: boolean;
  IncludeSupplementalText?: boolean;
  PreferShorterJobTitles?: boolean;
}

export interface ParsingMetadata {
  /** @format int32 */
  ElapsedMilliseconds?: number;
  TimedOut?: boolean;
  TimedOutAtMilliseconds?: Int32SovrenPrimitive;
  LicenseSerialNumber?: string | null;
  Enrichment?: EnrichmentMetadata;
}

export interface PayRange {
  Minimum?: Int32SovrenPrimitive;
  Maximum?: Int32SovrenPrimitive;
  RawMinimum?: string | null;
  RawMaximum?: string | null;
  Currency?: string | null;
  TimeScale?: string | null;
}

export interface PersonName {
  FormattedName?: string | null;
  Prefix?: string | null;
  GivenName?: string | null;
  Moniker?: string | null;
  MiddleName?: string | null;
  FamilyName?: string | null;
  Suffix?: string | null;
}

export interface PersonalAttributes {
  Availability?: string | null;
  Birthplace?: string | null;
  CurrentLocation?: string | null;
  CurrentSalary?: Salary;
  DateOfBirth?: SovrenDateWithParts;
  DrivingLicense?: string | null;
  FamilyComposition?: string | null;
  FathersName?: string | null;
  Gender?: string | null;
  HukouCity?: string | null;
  HukouArea?: string | null;
  MaritalStatus?: string | null;
  MothersMaidenName?: string | null;
  MotherTongue?: string | null;
  NationalIdentities?: NationalIdentity[] | null;
  Nationality?: string | null;
  PassportNumber?: string | null;
  PreferredLocation?: string | null;
  RequiredSalary?: Salary;
  VisaStatus?: string | null;
  WillingToRelocate?: string | null;
}

export interface Position {
  Id?: string | null;
  Employer?: Employer;
  RelatedToByDates?: string[] | null;
  RelatedToByCompanyName?: string[] | null;
  IsSelfEmployed?: boolean;
  IsCurrent?: boolean;
  JobTitle?: JobTitle;
  StartDate?: SovrenDateWithParts;
  EndDate?: SovrenDateWithParts;
  NumberEmployeesSupervised?: Int32SovrenPrimitive;
  JobType?: string | null;
  TaxonomyName?: string | null;
  SubTaxonomyName?: string | null;
  JobLevel?: string | null;
  /** @format int32 */
  TaxonomyPercentage?: number;
  Description?: string | null;
  Bullets?: Bullet[] | null;
  NormalizedProfession?: NormalizedProfession;
}

export interface PostalAddress {
  CountryCode?: string | null;
  PostalCode?: string | null;
  Region?: string | null;
  Municipality?: string | null;
  AddressLine?: string | null;
}

export interface ProfessionExclusiveSkills {
  /** @format int32 */
  ProfessionCodeId?: number;
  SkillsFoundOnlyInThisProfession?: SkillScore[] | null;
}

export interface ProfessionNormalizationMetadata {
  ONETVersion?: string | null;
  ISCOVersion?: string | null;
  ProfessionTaxonomyVersion?: string | null;
}

export interface ProfessionNormalizationVersions {
  ONET?: string | null;
}

export interface ProfessionsAutoCompleteRequest {
  Prefix?: string | null;
  /** @format int32 */
  Limit?: number;
  Languages?: string[] | null;
  OutputLanguage?: string | null;
}

export interface ProfessionsSettings {
  Normalize?: boolean;
  Version?: ProfessionNormalizationVersions;
}

export interface ReservedData {
  Phones?: string[] | null;
  Names?: string[] | null;
  EmailAddresses?: string[] | null;
  Urls?: string[] | null;
  OtherData?: string[] | null;
}

export interface ResponseInfoModel {
  Code?: ResponseInfoSubCode;
  Message?: string | null;
}

export enum ResponseInfoSubCode {
  Success = 'Success',
  SomeErrors = 'SomeErrors',
  MissingParameter = 'MissingParameter',
  InvalidParameter = 'InvalidParameter',
  InsufficientData = 'InsufficientData',
  AuthenticationError = 'AuthenticationError',
  Unauthorized = 'Unauthorized',
  DataNotFound = 'DataNotFound',
  CoordinatesNotFound = 'CoordinatesNotFound',
  UnhandledException = 'UnhandledException',
  ConversionException = 'ConversionException',
  PossibleTruncationFromTimeout = 'PossibleTruncationFromTimeout',
  WarningsFoundDuringParsing = 'WarningsFoundDuringParsing',
  ConstraintError = 'ConstraintError',
  DuplicateAsset = 'DuplicateAsset',
  UnsupportedContentTypeHeader = 'UnsupportedContentTypeHeader',
  InstallationError = 'InstallationError',
  TooManyRequests = 'TooManyRequests',
  MaintenanceMode = 'MaintenanceMode',
  Conflict = 'Conflict',
  RequestTooLarge = 'RequestTooLarge',
  SystemWarning = 'SystemWarning',
  ServiceUnavailable = 'ServiceUnavailable',
  Timeout = 'Timeout',
  TemplateError = 'TemplateError',
}

export interface ResumeBimetricMatchRequest {
  SourceResume?: StructuredParsedResume;
  TargetResumes?: StructuredParsedResume[] | null;
  TargetJobs?: StructuredParsedJob[] | null;
  Settings?: MatchSettings;
  PreferredCategoryWeights?: CategoryWeights;
}

export interface ResumeData {
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

export interface ResumeDataStructuredResponseModel {
  Info?: StructuredResponseInfoModel;
  Value?: ResumeData;
}

export interface ResumeGeocoderResponseModel {
  ResumeData?: ResumeData;
}

export interface ResumeGeocoderResponseModelStructuredResponseModel {
  Info?: StructuredResponseInfoModel;
  Value?: ResumeGeocoderResponseModel;
}

export interface ResumeLogo {
  Logo?: string | null;
  /** @format int32 */
  Width?: number;
  /** @format int32 */
  Height?: number;
}

export interface ResumeMetadata {
  FoundSections?: ResumeSection[] | null;
  ResumeQuality?: ResumeQualityAssessment[] | null;
  ReservedData?: ReservedData;
  PlainText?: string | null;
  DocumentLanguage?: string | null;
  DocumentCulture?: string | null;
  ParserSettings?: string | null;
  /** @format date */
  DocumentLastModified?: string;
}

export interface ResumeParsingTransaction {
  ParsingResponse?: ResponseInfoModel;
  GeocodeResponse?: ResponseInfoModel;
  IndexingResponse?: ResponseInfoModel;
  ResumeData?: ResumeData;
  RedactedResumeData?: ResumeData;
  FlexResponse?: FlexRequestResponse;
  EducationNormalizationResponse?: ResponseInfoModel;
  ProfessionNormalizationResponse?: ResponseInfoModel;
  ConversionMetadata?: ConversionMetadata;
  Conversions?: Conversions;
  ParsingMetadata?: ParsingMetadata;
}

export interface ResumeParsingTransactionStructuredResponseModel {
  Info?: StructuredResponseInfoModel;
  Value?: ResumeParsingTransaction;
}

export interface ResumeQualityAssessment {
  Level?: string | null;
  Findings?: Finding[] | null;
}

export interface ResumeSection {
  /** @format int32 */
  FirstLineNumber?: number;
  /** @format int32 */
  LastLineNumber?: number;
  SectionType?: string | null;
  HeaderTextFound?: string | null;
}

export interface ResumeSkill {
  Id?: string | null;
  Name?: string | null;
  FoundIn?: SectionIdentifier[] | null;
  ExistsInText?: boolean;
  Type?: string | null;
  Variations?: ResumeSkillVariation[] | null;
  MonthsExperience?: Int32SovrenPrimitive;
  LastUsed?: DateTimeSovrenPrimitive;
  ChildrenMonthsExperience?: Int32SovrenPrimitive;
  ChildrenLastUsed?: DateTimeSovrenPrimitive;
}

export interface ResumeSkillVariation {
  Id?: string | null;
  Name?: string | null;
  FoundIn?: SectionIdentifier[] | null;
  ExistsInText?: boolean;
  MonthsExperience?: Int32SovrenPrimitive;
  LastUsed?: DateTimeSovrenPrimitive;
}

export interface ResumeSubTaxonomy {
  SubTaxonomyId?: string | null;
  SubTaxonomyName?: string | null;
  /** @format int32 */
  PercentOfOverall?: number;
  /** @format int32 */
  PercentOfParent?: number;
  Skills?: ResumeSkill[] | null;
}

export interface ResumeTaxonomy {
  Id?: string | null;
  Name?: string | null;
  /** @format int32 */
  PercentOfOverall?: number;
  SubTaxonomies?: ResumeSubTaxonomy[] | null;
}

export interface ResumeTaxonomyRoot {
  Root?: string | null;
  Taxonomies?: ResumeTaxonomy[] | null;
}

export enum ResumeType {
  DOCX = 'DOCX',
  PDF = 'PDF',
  HTML = 'HTML',
}

export interface Salary {
  Currency?: string | null;
  /** @format double */
  Amount?: number;
}

export interface SearchResult {
  IndexId?: string | null;
  Id?: string | null;
}

export interface SectionIdentifier {
  SectionType?: string | null;
  Id?: string | null;
}

export interface SecurityCredential {
  Name?: string | null;
  FoundInContext?: string | null;
}

export interface SimpleCategoryScore {
  Found?: string[] | null;
  NotFound?: string[] | null;
  /** @format double */
  UnweightedScore?: number;
  Evidence?: Evidence[] | null;
}

export interface Skill {
  SkillName?: string | null;
  MonthsOfExperienceRange?: IntegerRange;
  IsCurrent?: boolean;
  ExperienceLevel?: ExperienceLevel;
}

export interface SkillCode {
  Id?: string | null;
  Description?: string | null;
  Type?: string | null;
}

export interface SkillInfo {
  Skill?: string | null;
  IsCurrent?: boolean;
}

export interface SkillMatch {
  /** @format int32 */
  BeginSpan?: number;
  /** @format int32 */
  EndSpan?: number;
  /** @format float */
  Likelihood?: number;
  RawText?: string | null;
}

export interface SkillResponseModel {
  Key?: string | null;
  Name?: string | null;
  Timestamp?: string | null;
}

export interface SkillResponseModelArrayStructuredResponseModel {
  Info?: StructuredResponseInfoModel;
  Value?: SkillResponseModel[] | null;
}

export interface SkillResponseModelStructuredResponseModel {
  Info?: StructuredResponseInfoModel;
  Value?: SkillResponseModel;
}

export interface SkillScore {
  /** @format float */
  Score?: number;
  Id?: string | null;
  Description?: string | null;
}

export interface SkillsAutoCompleteRequest {
  Types?: string[] | null;
  Prefix?: string | null;
  /** @format int32 */
  Limit?: number;
  Languages?: string[] | null;
  OutputLanguage?: string | null;
}

export interface SkillsCategoryScore {
  Found?: SkillInfo[] | null;
  NotFound?: string[] | null;
  /** @format double */
  UnweightedScore?: number;
  Evidence?: Evidence[] | null;
}

export interface SkillsMetadata {
  Version?: string | null;
}

export interface SkillsSettings {
  Normalize?: boolean;
  TaxonomyVersion?: string | null;
}

export interface SkillsSimilarityRequest {
  SkillsA?: SkillScore[] | null;
  SkillsB?: SkillScore[] | null;
}

export interface SkillsSimilarityResponse {
  /** @format float */
  SimilarityScore?: number;
}

export interface SkillsSimilarityResponseStructuredResponseModel {
  Info?: StructuredResponseInfoModel;
  Value?: SkillsSimilarityResponse;
}

export interface SovrenDateWithParts {
  /** @format date */
  Date?: string;
  IsCurrentDate?: boolean;
  FoundYear?: boolean;
  FoundMonth?: boolean;
  FoundDay?: boolean;
}

export interface SovrenLocation {
  CountryCode?: string | null;
  PostalCode?: string | null;
  Regions?: string[] | null;
  Municipality?: string | null;
  StreetAddressLines?: string[] | null;
  GeoCoordinates?: GeoCoordinate;
}

export interface SovrenNormalizeProfessionsResponse {
  Professions?: SovrenNormalizedProfession[] | null;
}

export interface SovrenNormalizeProfessionsResponseStructuredResponseModel {
  Info?: StructuredResponseInfoModel;
  Value?: SovrenNormalizeProfessionsResponse;
}

export interface SovrenNormalizedProfession {
  /** @format int32 */
  CodeId?: number;
  Description?: string | null;
  Group?: Int32LookupGroupOrClassInfo;
  Class?: Int32LookupGroupOrClassInfo;
  Onet?: StringLookupGroupOrClassInfo;
  Isco?: StringLookupGroupOrClassInfo;
  Onet2019?: StringLookupGroupOrClassInfo;
  Kldb2020?: StringLookupGroupOrClassInfo;
  UwvBoc?: StringLookupGroupOrClassInfo;
  UkSoc2010?: StringLookupGroupOrClassInfo;
  /** @format float */
  Confidence?: number;
}

export interface StringArrayStructuredResponseModel {
  Info?: StructuredResponseInfoModel;
  Value?: string[] | null;
}

export interface StringLookupGroupOrClassInfo {
  CodeId?: string | null;
  Description?: string | null;
}

export interface StringRange {
  Minimum?: string | null;
  Maximum?: string | null;
}

export interface StringVersionedNormalizedProfessionClassification {
  Version?: string | null;
  CodeId?: string | null;
  Description?: string | null;
}

export interface StructuredBimetricMatchResponse {
  Matches?: BimetricMatchResult[] | null;
  SuggestedCategoryWeights?: CategoryWeights;
  AppliedCategoryWeights?: CategoryWeights;
}

export interface StructuredBimetricMatchResponseStructuredResponseModel {
  Info?: StructuredResponseInfoModel;
  Value?: StructuredBimetricMatchResponse;
}

export interface StructuredFilterCriteria {
  UserDefinedTags?: string[] | null;
  UserDefinedTagsMustAllExist?: boolean;
  DocumentIds?: string[] | null;
  LocationCriteria?: LocationCriteria;
  SearchExpression?: string | null;
  HasPatents?: string | null;
  HasSecurityCredentials?: string | null;
  SecurityCredentials?: string[] | null;
  IsAuthor?: string | null;
  IsPublicSpeaker?: string | null;
  IsMilitary?: string | null;
  Educations?: Education[] | null;
  SchoolNames?: string[] | null;
  DegreeNames?: string[] | null;
  DegreeTypes?: string[] | null;
  IsTopStudent?: string | null;
  IsCurrentStudent?: string | null;
  IsRecentGraduate?: string | null;
  Employers?: string[] | null;
  EmployersMustAllBeCurrentEmployer?: boolean;
  MonthsExperience?: IntegerRange;
  DocumentLanguages?: string[] | null;
  Skills?: Skill[] | null;
  SkillsMustAllExist?: boolean;
  RevisionDateRange?: StringRange;
  JobTitles?: JobTitleSlim[] | null;
  ExecutiveType?: string[] | null;
  Certifications?: string[] | null;
  MonthsManagementExperience?: IntegerRange;
  CurrentManagementLevel?: string | null;
  LanguagesKnown?: string[] | null;
  LanguagesKnownMustAllExist?: boolean;
  Taxonomies?: string[] | null;
  AverageMonthsPerEmployer?: IntegerRange;
  JobPredictiveIndex?: IntegerRange;
}

export interface StructuredFormatResumeFromTemplateRequest {
  ResumeData?: ResumeData;
  Template?: string | null;
  CustomData?: any;
  OutputType?: ResumeType;
}

export interface StructuredFormatResumeRequest {
  ResumeData?: ResumeData;
  Options?: FormatResumeOptions;
}

export interface StructuredIndexDocumentCountResponse {
  /** @format int64 */
  Count?: number;
}

export interface StructuredIndexDocumentCountResponseStructuredResponseModel {
  Info?: StructuredResponseInfoModel;
  Value?: StructuredIndexDocumentCountResponse;
}

export interface StructuredIndexingOptions {
  IndexId?: string | null;
  DocumentId?: string | null;
  UserDefinedTags?: string[] | null;
}

export interface StructuredMatchRequestBase {
  PreferredCategoryWeights?: CategoryWeights;
  CategoryWeights?: CategoryWeight[] | null;
  /** @format int32 */
  Take?: number;
  FilterCriteria?: StructuredFilterCriteria;
  Settings?: MatchSettings;
  IndexIdsToSearchInto?: string[] | null;
}

export interface StructuredMatchResponse {
  Matches?: MatchResult[] | null;
  /** @format int32 */
  CurrentCount?: number;
  SuggestedCategoryWeights?: CategoryWeights;
  AppliedCategoryWeights?: CategoryWeights;
  /** @format int64 */
  ElapsedMilliseconds?: number;
  /** @format int64 */
  TotalCount?: number;
}

export interface StructuredMatchResponseStructuredResponseModel {
  Info?: StructuredResponseInfoModel;
  Value?: StructuredMatchResponse;
}

export interface StructuredParseJobOrderRequest {
  DocumentAsBase64String?: string | null;
  DocumentLastModified?: string | null;
  GeocodeOptions?: GeoCodeOptions;
  IndexingOptions?: StructuredIndexingOptions;
  Configuration?: ParseJobOrderConfiguration;
  OutputHtml?: string | null;
  HideHtmlImages?: string | null;
  OutputRtf?: string | null;
  SkillsData?: string[] | null;
  NormalizerData?: string | null;
  OutputPdf?: string | null;
  ProfessionsSettings?: ProfessionsSettings;
  SkillsSettings?: SkillsSettings;
}

export interface StructuredParseResumeRequest {
  DocumentAsBase64String?: string | null;
  DocumentLastModified?: string | null;
  GeocodeOptions?: GeoCodeOptions;
  IndexingOptions?: StructuredIndexingOptions;
  OutputHtml?: string | null;
  HideHtmlImages?: string | null;
  OutputRtf?: string | null;
  OutputCandidateImage?: string | null;
  OutputPdf?: string | null;
  UseLLMParser?: string | null;
  Configuration?: string | null;
  SkillsData?: string[] | null;
  NormalizerData?: string | null;
  ProfessionsSettings?: ProfessionsSettings;
  SkillsSettings?: SkillsSettings;
  FlexRequests?: FlexRequest[] | null;
}

export interface StructuredParsedJob {
  Id?: string | null;
  JobData?: JobData;
}

export interface StructuredParsedResume {
  Id?: string | null;
  ResumeData?: ResumeData;
}

export interface StructuredResponseInfoModel {
  Code?: ResponseInfoSubCode;
  Message?: string | null;
  TransactionId?: string | null;
  EngineVersion?: string | null;
  ApiVersion?: string | null;
  /** @format int64 */
  TotalElapsedMilliseconds?: number;
  /** @format double */
  TransactionCost?: number;
  CustomerDetails?: CustomerDetails;
}

export interface StructuredSearchRequest {
  PaginationSettings?: PaginationSettings;
  FilterCriteria?: StructuredFilterCriteria;
  Settings?: MatchSettings;
  IndexIdsToSearchInto?: string[] | null;
}

export interface StructuredSearchResponse {
  Matches?: SearchResult[] | null;
  /** @format int32 */
  CurrentCount?: number;
  /** @format int64 */
  ElapsedMilliseconds?: number;
  /** @format int64 */
  TotalCount?: number;
}

export interface StructuredSearchResponseStructuredResponseModel {
  Info?: StructuredResponseInfoModel;
  Value?: StructuredSearchResponse;
}

export interface StructuredUpdateDocumentCustomValuesRequest {
  UserDefinedTags?: string[] | null;
  Method?: UpdateDocumentMethods;
}

export interface SuggestProfessionWarnings {
  SkillsWithoutProfessionRelation?: string[] | null;
  InvalidSkills?: string[] | null;
}

export interface SuggestProfessionsRequest {
  SkillIds?: string[] | null;
  Skills?: SkillScore[] | null;
  ReturnMissingSkills?: boolean;
  /** @format int32 */
  Limit?: number;
  OutputLanguage?: string | null;
}

export interface SuggestProfessionsResponse {
  SuggestedProfessions?: SuggestedProfession[] | null;
  Warnings?: SuggestProfessionWarnings;
}

export interface SuggestProfessionsResponseStructuredResponseModel {
  Info?: StructuredResponseInfoModel;
  Value?: SuggestProfessionsResponse;
}

export interface SuggestSkillsFromProfessionRequest {
  ProfessionCodeIds?: number[] | null;
  /** @format int32 */
  Limit?: number;
  OutputLanguage?: string | null;
}

export interface SuggestSkillsFromSkillsRequest {
  Skills?: SkillScore[] | null;
  /** @format int32 */
  Limit?: number;
  OutputLanguage?: string | null;
}

export interface SuggestSkillsResponse {
  SuggestedSkills?: SkillScore[] | null;
}

export interface SuggestSkillsResponseStructuredResponseModel {
  Info?: StructuredResponseInfoModel;
  Value?: SuggestSkillsResponse;
}

export interface SuggestedProfession {
  MissingSkills?: SkillScore[] | null;
  /** @format float */
  Score?: number;
  /** @format int32 */
  CodeId?: number;
  Description?: string | null;
}

export interface TaxonomiesCategoryScore {
  ActualTaxonomies?: TaxonomyEvidence;
  DesiredTaxonomies?: TaxonomyEvidence;
  /** @format double */
  UnweightedScore?: number;
  Evidence?: Evidence[] | null;
}

export interface TaxonomyEvidence {
  Primary?: TaxonomyInfo;
  Secondary?: TaxonomyInfo;
}

export interface TaxonomyInfo {
  Taxonomy?: TaxonomyMatchInfo;
  Subtaxonomy?: TaxonomyMatchInfo;
}

export interface TaxonomyMatchInfo {
  Name?: string | null;
  Id?: string | null;
  Matched?: boolean;
}

export interface TaxonomyMetadata {
  ServiceVersion?: string | null;
  TaxonomyReleaseDate?: string | null;
}

export interface TaxonomyMetadataStructuredResponseModel {
  Info?: StructuredResponseInfoModel;
  Value?: TaxonomyMetadata;
}

export interface Telephone {
  Raw?: string | null;
  Normalized?: string | null;
  InternationalCountryCode?: string | null;
  AreaCityCode?: string | null;
  SubscriberNumber?: string | null;
}

export interface TrainingDetail {
  Text?: string | null;
  Entity?: string | null;
  Qualifications?: string[] | null;
  StartDate?: SovrenDateWithParts;
  EndDate?: SovrenDateWithParts;
}

export interface TrainingHistory {
  Text?: string | null;
  Trainings?: TrainingDetail[] | null;
}

export enum UpdateDocumentMethods {
  Overwrite = 'Overwrite',
  Add = 'Add',
  Delete = 'Delete',
}

export interface UpdateNormalizationRequest {
  /** @format byte */
  ContentBytes?: string | null;
}

export interface UpdateSkillRequest {
  Content?: string[] | null;
}

export interface V2NormalizedSkillJob {
  Name?: string | null;
  Id?: string | null;
  Type?: string | null;
  Required?: boolean;
  RawSkills?: string[] | null;
}

export interface V2NormalizedSkillResume {
  Name?: string | null;
  Id?: string | null;
  Type?: string | null;
  FoundIn?: SectionIdentifier[] | null;
  MonthsExperience?: Int32SovrenPrimitive;
  LastUsed?: DateTimeSovrenPrimitive;
  RawSkills?: string[] | null;
}

export interface V2ProfessionClass {
  Name?: string | null;
  Id?: string | null;
  /** @format int32 */
  Percent?: number;
  Groups?: V2ProfessionGroup[] | null;
}

export interface V2ProfessionGroup {
  Name?: string | null;
  Id?: string | null;
  /** @format int32 */
  Percent?: number;
  NormalizedSkills?: string[] | null;
}

export interface V2RawSkillJob {
  Name?: string | null;
  Required?: boolean;
}

export interface V2RawSkillResume {
  Name?: string | null;
  FoundIn?: SectionIdentifier[] | null;
  MonthsExperience?: Int32SovrenPrimitive;
  LastUsed?: DateTimeSovrenPrimitive;
}

export interface V2SkillsDataJob {
  Raw?: V2RawSkillJob[] | null;
  Normalized?: V2NormalizedSkillJob[] | null;
  RelatedProfessionClasses?: V2ProfessionClass[] | null;
}

export interface V2SkillsDataResume {
  Raw?: V2RawSkillResume[] | null;
  Normalized?: V2NormalizedSkillResume[] | null;
  RelatedProfessionClasses?: V2ProfessionClass[] | null;
}

export interface WebAddress {
  Address?: string | null;
  Type?: string | null;
}

export interface WorkHistoryOptions {
  NumPositions?: Int32Range;
  EmployerNames?: EmployerNameOptions;
  /** @format int32 */
  MaxYearsOfWorkHistory?: number;
}
