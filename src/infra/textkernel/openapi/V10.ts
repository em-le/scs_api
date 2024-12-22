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

import {
  AddJobToIndexRequestModel,
  AddMultipleJobsToIndexRequestModel,
  AddMultipleResumesToIndexRequestModel,
  AddResumeToIndexRequestModel,
  AutoCompleteProfessionsResponseStructuredResponseModel,
  AutoCompleteSkillsResponseStructuredResponseModel,
  BulkDeleteRequestModel,
  BulkDocumentResponseListStructuredResponseModel,
  ByteArrayStructuredResponseModel,
  CompareSkillsRequest,
  CompareSkillsResponseStructuredResponseModel,
  CompareSkillsToProfessionsRequest,
  CompareSkillsToProfessionsResponseStructuredResponseModel,
  CreateIndexRequestModel,
  CreateNormalizationRequest,
  CreateSkillRequest,
  ExtractSkillsRequest,
  ExtractSkillsResponseStructuredResponseModel,
  FormatResumeResponseStructuredResponseModel,
  GenerateJobRequest,
  GenerateJobResponseStructuredResponseModel,
  GeoCodeJobRequest,
  GeoCodeResumeRequest,
  GeocodeAndIndexJobRequest,
  GeocodeAndIndexJobResponseStructuredResponseModel,
  GeocodeAndIndexResumeRequest,
  GeocodeAndIndexResumeResponseStructuredResponseModel,
  IndexDetailListStructuredResponseModel,
  JobBimetricMatchRequest,
  JobDataStructuredResponseModel,
  JobGeocoderResponseModelStructuredResponseModel,
  JobParsingTransactionStructuredResponseModel,
  JobSuggestSkillsRequest,
  JobSuggestSkillsResponseStructuredResponseModel,
  LookupProfessionCodesRequest,
  LookupProfessionCodesResponseStructuredResponseModel,
  LookupSkillCodesRequest,
  LookupSkillCodesResponseStructuredResponseModel,
  MatchJobRequest,
  MatchResumeRequest,
  NormalizationResponseModelArrayStructuredResponseModel,
  NormalizationResponseModelStructuredResponseModel,
  NormalizeProfessionsRequest,
  NormalizeSkillsRequest,
  NormalizeSkillsResponseStructuredResponseModel,
  ObjectStructuredResponseModel,
  ProfessionsAutoCompleteRequest,
  ResumeBimetricMatchRequest,
  ResumeDataStructuredResponseModel,
  ResumeGeocoderResponseModelStructuredResponseModel,
  ResumeParsingTransactionStructuredResponseModel,
  SkillResponseModelArrayStructuredResponseModel,
  SkillResponseModelStructuredResponseModel,
  SkillsAutoCompleteRequest,
  SkillsSimilarityRequest,
  SkillsSimilarityResponseStructuredResponseModel,
  SovrenNormalizeProfessionsResponseStructuredResponseModel,
  StringArrayStructuredResponseModel,
  StructuredBimetricMatchResponseStructuredResponseModel,
  StructuredFormatResumeFromTemplateRequest,
  StructuredFormatResumeRequest,
  StructuredIndexDocumentCountResponseStructuredResponseModel,
  StructuredMatchRequestBase,
  StructuredMatchResponseStructuredResponseModel,
  StructuredParseJobOrderRequest,
  StructuredParseResumeRequest,
  StructuredSearchRequest,
  StructuredSearchResponseStructuredResponseModel,
  StructuredUpdateDocumentCustomValuesRequest,
  SuggestProfessionsRequest,
  SuggestProfessionsResponseStructuredResponseModel,
  SuggestSkillsFromProfessionRequest,
  SuggestSkillsFromSkillsRequest,
  SuggestSkillsResponseStructuredResponseModel,
  TaxonomyMetadataStructuredResponseModel,
  UpdateNormalizationRequest,
  UpdateSkillRequest,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class V10<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Account
   * @name AccountGet
   * @summary Gets the account information.
   * @request GET:/v10/account
   */
  accountGet = (params: RequestParams = {}) =>
    this.request<ObjectStructuredResponseModel, any>({
      path: `/v10/account`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Document
   * @name DocumentPostResume
   * @summary Add a single v10 resume to an index
   * @request POST:/v10/index/{indexId}/resume/{documentId}
   */
  documentPostResume = (
    indexId: string,
    documentId: string,
    data: AddResumeToIndexRequestModel,
    params: RequestParams = {},
  ) =>
    this.request<ObjectStructuredResponseModel, any>({
      path: `/v10/index/${indexId}/resume/${documentId}`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Document
   * @name DocumentGetResume
   * @summary Retrieve a v10 resume from an index
   * @request GET:/v10/index/{indexId}/resume/{documentId}
   */
  documentGetResume = (indexId: string, documentId: string, params: RequestParams = {}) =>
    this.request<ResumeDataStructuredResponseModel, any>({
      path: `/v10/index/${indexId}/resume/${documentId}`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Document
   * @name DocumentPatchResume
   * @summary Update the custom value ids for a resume
   * @request PATCH:/v10/index/{indexId}/resume/{documentId}
   */
  documentPatchResume = (
    indexId: string,
    documentId: string,
    data: StructuredUpdateDocumentCustomValuesRequest,
    params: RequestParams = {},
  ) =>
    this.request<ObjectStructuredResponseModel, any>({
      path: `/v10/index/${indexId}/resume/${documentId}`,
      method: 'PATCH',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Document
   * @name DocumentPostJobOrder
   * @summary Add a single v10 job to an index
   * @request POST:/v10/index/{indexId}/joborder/{documentId}
   */
  documentPostJobOrder = (
    indexId: string,
    documentId: string,
    data: AddJobToIndexRequestModel,
    params: RequestParams = {},
  ) =>
    this.request<ObjectStructuredResponseModel, any>({
      path: `/v10/index/${indexId}/joborder/${documentId}`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Document
   * @name DocumentGetJobOrder
   * @summary Retrieve a v10 job from an index
   * @request GET:/v10/index/{indexId}/joborder/{documentId}
   */
  documentGetJobOrder = (indexId: string, documentId: string, params: RequestParams = {}) =>
    this.request<JobDataStructuredResponseModel, any>({
      path: `/v10/index/${indexId}/joborder/${documentId}`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Document
   * @name DocumentPatchJobOrder
   * @summary Update the custom value ids for a job order
   * @request PATCH:/v10/index/{indexId}/joborder/{documentId}
   */
  documentPatchJobOrder = (
    indexId: string,
    documentId: string,
    data: StructuredUpdateDocumentCustomValuesRequest,
    params: RequestParams = {},
  ) =>
    this.request<ObjectStructuredResponseModel, any>({
      path: `/v10/index/${indexId}/joborder/${documentId}`,
      method: 'PATCH',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Document
   * @name DocumentPostResumes
   * @summary Add multiple v10 resumes to an index
   * @request POST:/v10/index/{indexId}/resumes
   */
  documentPostResumes = (indexId: string, data: AddMultipleResumesToIndexRequestModel, params: RequestParams = {}) =>
    this.request<BulkDocumentResponseListStructuredResponseModel, any>({
      path: `/v10/index/${indexId}/resumes`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Document
   * @name DocumentPostJobs
   * @summary Add multiple v10 jobs to an index
   * @request POST:/v10/index/{indexId}/joborders
   */
  documentPostJobs = (indexId: string, data: AddMultipleJobsToIndexRequestModel, params: RequestParams = {}) =>
    this.request<BulkDocumentResponseListStructuredResponseModel, any>({
      path: `/v10/index/${indexId}/joborders`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Document
   * @name DocumentDelete
   * @summary Delete a single document from an index
   * @request DELETE:/v10/index/{indexId}/documents/{documentId}
   */
  documentDelete = (indexId: string, documentId: string, params: RequestParams = {}) =>
    this.request<ObjectStructuredResponseModel, any>({
      path: `/v10/index/${indexId}/documents/${documentId}`,
      method: 'DELETE',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Document
   * @name DocumentHead
   * @summary Check if document exists in an index
   * @request HEAD:/v10/index/{indexId}/documents/{documentId}
   */
  documentHead = (indexId: string, documentId: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/v10/index/${indexId}/documents/${documentId}`,
      method: 'HEAD',
      ...params,
    });
  /**
   * No description
   *
   * @tags Document
   * @name DocumentDelete0
   * @summary Delete multiple documents from an index
   * @request POST:/v10/index/{indexId}/documents/delete
   */
  documentDelete0 = (indexId: string, data: BulkDeleteRequestModel, params: RequestParams = {}) =>
    this.request<BulkDocumentResponseListStructuredResponseModel, any>({
      path: `/v10/index/${indexId}/documents/delete`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Formatter
   * @name FormatterFormatResume
   * @summary Generates a DOCX or PDF resume based on parsed data
   * @request POST:/v10/formatter/resume
   */
  formatterFormatResume = (data: StructuredFormatResumeRequest, params: RequestParams = {}) =>
    this.request<FormatResumeResponseStructuredResponseModel, any>({
      path: `/v10/formatter/resume`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Formatter
   * @name FormatterFormatResumeFromTemplate
   * @summary Generates a DOCX or PDF resume based on parsed data from a given template
   * @request POST:/v10/formatter/resume/template
   */
  formatterFormatResumeFromTemplate = (data: StructuredFormatResumeFromTemplateRequest, params: RequestParams = {}) =>
    this.request<FormatResumeResponseStructuredResponseModel, any>({
      path: `/v10/formatter/resume/template`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags GeocodeAndIndex
   * @name GeocodeAndIndexGeocodeAndIndexResume
   * @summary Geocode and Index an already parsed v10 resume
   * @request POST:/v10/geocodeAndIndex/resume
   */
  geocodeAndIndexGeocodeAndIndexResume = (data: GeocodeAndIndexResumeRequest, params: RequestParams = {}) =>
    this.request<GeocodeAndIndexResumeResponseStructuredResponseModel, string>({
      path: `/v10/geocodeAndIndex/resume`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags GeocodeAndIndex
   * @name GeocodeAndIndexGeocodeAndIndexJob
   * @summary Geocode and Index an already parsed v10 job order
   * @request POST:/v10/geocodeAndIndex/joborder
   */
  geocodeAndIndexGeocodeAndIndexJob = (data: GeocodeAndIndexJobRequest, params: RequestParams = {}) =>
    this.request<GeocodeAndIndexJobResponseStructuredResponseModel, string>({
      path: `/v10/geocodeAndIndex/joborder`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Geocoder
   * @name GeocoderGeocodeResume
   * @summary Geocodes an already parsed v10 resume
   * @request POST:/v10/geocoder/resume
   */
  geocoderGeocodeResume = (data: GeoCodeResumeRequest, params: RequestParams = {}) =>
    this.request<ResumeGeocoderResponseModelStructuredResponseModel, string>({
      path: `/v10/geocoder/resume`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Geocoder
   * @name GeocoderGeocodeJob
   * @summary Geocodes an already parsed v10 job order
   * @request POST:/v10/geocoder/joborder
   */
  geocoderGeocodeJob = (data: GeoCodeJobRequest, params: RequestParams = {}) =>
    this.request<JobGeocoderResponseModelStructuredResponseModel, string>({
      path: `/v10/geocoder/joborder`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Index
   * @name IndexGet0
   * @summary Retrieve all indices
   * @request GET:/v10/index
   */
  indexGet0 = (params: RequestParams = {}) =>
    this.request<IndexDetailListStructuredResponseModel, any>({
      path: `/v10/index`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Index
   * @name IndexPost
   * @summary Create an index
   * @request POST:/v10/index/{indexId}
   */
  indexPost = (indexId: string, data: CreateIndexRequestModel, params: RequestParams = {}) =>
    this.request<ObjectStructuredResponseModel, any>({
      path: `/v10/index/${indexId}`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Index
   * @name IndexDelete
   * @summary Delete an index
   * @request DELETE:/v10/index/{indexId}
   */
  indexDelete = (indexId: string, params: RequestParams = {}) =>
    this.request<ObjectStructuredResponseModel, any>({
      path: `/v10/index/${indexId}`,
      method: 'DELETE',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Index
   * @name IndexGetIndexDocumentCount
   * @summary Retrieve number of documents in a single index
   * @request GET:/v10/index/{indexId}/count
   */
  indexGetIndexDocumentCount = (indexId: string, params: RequestParams = {}) =>
    this.request<StructuredIndexDocumentCountResponseStructuredResponseModel, any>({
      path: `/v10/index/${indexId}/count`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags JobDescriptionAPI
   * @name JobDescriptionApiGenerate
   * @summary Generates a job description based on input parameters
   * @request POST:/v10/job-description/generate
   */
  jobDescriptionApiGenerate = (data: GenerateJobRequest, params: RequestParams = {}) =>
    this.request<GenerateJobResponseStructuredResponseModel, any>({
      path: `/v10/job-description/generate`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags JobDescriptionAPI
   * @name JobDescriptionApiSuggestSkills
   * @summary Can help suggesting skills to add to the job description
   * @request POST:/v10/job-description/suggest-skills
   */
  jobDescriptionApiSuggestSkills = (data: JobSuggestSkillsRequest, params: RequestParams = {}) =>
    this.request<JobSuggestSkillsResponseStructuredResponseModel, any>({
      path: `/v10/job-description/suggest-skills`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Matcher
   * @name MatcherResume
   * @summary Execute a match query from a v10 resume
   * @request POST:/v10/matcher/resume
   */
  matcherResume = (data: MatchResumeRequest, params: RequestParams = {}) =>
    this.request<StructuredMatchResponseStructuredResponseModel, any>({
      path: `/v10/matcher/resume`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Matcher
   * @name MatcherJob
   * @summary Execute a match query from a v10 job order
   * @request POST:/v10/matcher/joborder
   */
  matcherJob = (data: MatchJobRequest, params: RequestParams = {}) =>
    this.request<StructuredMatchResponseStructuredResponseModel, any>({
      path: `/v10/matcher/joborder`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Matcher
   * @name MatcherPost0
   * @summary Execute a match using a document already in an index
   * @request POST:/v10/matcher/indexes/{indexId}/documents/{documentId}
   */
  matcherPost0 = (indexId: string, documentId: string, data: StructuredMatchRequestBase, params: RequestParams = {}) =>
    this.request<StructuredMatchResponseStructuredResponseModel, any>({
      path: `/v10/matcher/indexes/${indexId}/documents/${documentId}`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Normalizations
   * @name NormalizationsGet
   * @summary Gets a list of available normalizations.
   * @request GET:/v10/normalizations
   */
  normalizationsGet = (params: RequestParams = {}) =>
    this.request<NormalizationResponseModelArrayStructuredResponseModel, any>({
      path: `/v10/normalizations`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Normalizations
   * @name NormalizationsPost
   * @summary Creates normalizations with given values. Overrides if exists.
   * @request POST:/v10/normalizations
   */
  normalizationsPost = (data: CreateNormalizationRequest, params: RequestParams = {}) =>
    this.request<NormalizationResponseModelStructuredResponseModel, any>({
      path: `/v10/normalizations`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Normalizations
   * @name NormalizationsGet0
   * @summary Gets the normalizations for a given name.
   * @request GET:/v10/normalizations/{key}
   */
  normalizationsGet0 = (key: string, params: RequestParams = {}) =>
    this.request<ByteArrayStructuredResponseModel, any>({
      path: `/v10/normalizations/${key}`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Normalizations
   * @name NormalizationsPut
   * @summary Overrides the existing normalization for the given key.
   * @request PUT:/v10/normalizations/{key}
   */
  normalizationsPut = (key: string, data: UpdateNormalizationRequest, params: RequestParams = {}) =>
    this.request<NormalizationResponseModelStructuredResponseModel, any>({
      path: `/v10/normalizations/${key}`,
      method: 'PUT',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Normalizations
   * @name NormalizationsDelete
   * @summary Deletes the normalizations for a given name.
   * @request DELETE:/v10/normalizations/{key}
   */
  normalizationsDelete = (key: string, params: RequestParams = {}) =>
    this.request<NormalizationResponseModelStructuredResponseModel, any>({
      path: `/v10/normalizations/${key}`,
      method: 'DELETE',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags DataEnrichmentServices
   * @name DataEnrichmentServicesSuggestSkillsFromProfessions
   * @summary Returns skills related to a given profession.
   * @request POST:/v10/ontology/suggestskills
   */
  dataEnrichmentServicesSuggestSkillsFromProfessions = (
    data: SuggestSkillsFromProfessionRequest,
    params: RequestParams = {},
  ) =>
    this.request<SuggestSkillsResponseStructuredResponseModel, any>({
      path: `/v10/ontology/suggestskills`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags DataEnrichmentServices
   * @name DataEnrichmentServicesSuggestSkillsFromProfessions2
   * @summary Returns skills related to a given profession.
   * @request POST:/v10/ontology/suggest-skills-from-professions
   * @originalName dataEnrichmentServicesSuggestSkillsFromProfessions
   * @duplicate
   */
  dataEnrichmentServicesSuggestSkillsFromProfessions2 = (
    data: SuggestSkillsFromProfessionRequest,
    params: RequestParams = {},
  ) =>
    this.request<SuggestSkillsResponseStructuredResponseModel, any>({
      path: `/v10/ontology/suggest-skills-from-professions`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags DataEnrichmentServices
   * @name DataEnrichmentServicesSuggestSkillsFromProfessions3
   * @summary Returns skills related to a given profession.
   * @request POST:/v10/ontology/suggestskillsfromprofessions
   * @originalName dataEnrichmentServicesSuggestSkillsFromProfessions
   * @duplicate
   */
  dataEnrichmentServicesSuggestSkillsFromProfessions3 = (
    data: SuggestSkillsFromProfessionRequest,
    params: RequestParams = {},
  ) =>
    this.request<SuggestSkillsResponseStructuredResponseModel, any>({
      path: `/v10/ontology/suggestskillsfromprofessions`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags DataEnrichmentServices
   * @name DataEnrichmentServicesSuggestSkillsFromSkills
   * @summary Returns skills related to a given set of skills.
   * @request POST:/v10/ontology/suggestskillsfromskills
   */
  dataEnrichmentServicesSuggestSkillsFromSkills = (data: SuggestSkillsFromSkillsRequest, params: RequestParams = {}) =>
    this.request<SuggestSkillsResponseStructuredResponseModel, any>({
      path: `/v10/ontology/suggestskillsfromskills`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags DataEnrichmentServices
   * @name DataEnrichmentServicesSuggestSkillsFromSkills2
   * @summary Returns skills related to a given set of skills.
   * @request POST:/v10/ontology/suggest-skills-from-skills
   * @originalName dataEnrichmentServicesSuggestSkillsFromSkills
   * @duplicate
   */
  dataEnrichmentServicesSuggestSkillsFromSkills2 = (data: SuggestSkillsFromSkillsRequest, params: RequestParams = {}) =>
    this.request<SuggestSkillsResponseStructuredResponseModel, any>({
      path: `/v10/ontology/suggest-skills-from-skills`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags DataEnrichmentServices
   * @name DataEnrichmentServicesSkillsSimilarityScore
   * @summary Returns skills related to a given set of skills.
   * @request POST:/v10/ontology/skillssimilarityscore
   */
  dataEnrichmentServicesSkillsSimilarityScore = (data: SkillsSimilarityRequest, params: RequestParams = {}) =>
    this.request<SkillsSimilarityResponseStructuredResponseModel, any>({
      path: `/v10/ontology/skillssimilarityscore`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags DataEnrichmentServices
   * @name DataEnrichmentServicesSkillsSimilarityScore2
   * @summary Returns skills related to a given set of skills.
   * @request POST:/v10/ontology/skills-similarity-score
   * @originalName dataEnrichmentServicesSkillsSimilarityScore
   * @duplicate
   */
  dataEnrichmentServicesSkillsSimilarityScore2 = (data: SkillsSimilarityRequest, params: RequestParams = {}) =>
    this.request<SkillsSimilarityResponseStructuredResponseModel, any>({
      path: `/v10/ontology/skills-similarity-score`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags DataEnrichmentServices
   * @name DataEnrichmentServicesSuggestProfessions
   * @summary Suggest professions based on a given set of skills.
   * @request POST:/v10/ontology/suggestprofessions
   */
  dataEnrichmentServicesSuggestProfessions = (data: SuggestProfessionsRequest, params: RequestParams = {}) =>
    this.request<SuggestProfessionsResponseStructuredResponseModel, any>({
      path: `/v10/ontology/suggestprofessions`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags DataEnrichmentServices
   * @name DataEnrichmentServicesSuggestProfessions2
   * @summary Suggest professions based on a given set of skills.
   * @request POST:/v10/ontology/suggest-professions
   * @originalName dataEnrichmentServicesSuggestProfessions
   * @duplicate
   */
  dataEnrichmentServicesSuggestProfessions2 = (data: SuggestProfessionsRequest, params: RequestParams = {}) =>
    this.request<SuggestProfessionsResponseStructuredResponseModel, any>({
      path: `/v10/ontology/suggest-professions`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags DataEnrichmentServices
   * @name DataEnrichmentServicesCompareProfessions
   * @summary Compare two professions based on the skills associated with each
   * @request POST:/v10/ontology/compareprofessions
   */
  dataEnrichmentServicesCompareProfessions = (data: CompareSkillsRequest, params: RequestParams = {}) =>
    this.request<CompareSkillsResponseStructuredResponseModel, any>({
      path: `/v10/ontology/compareprofessions`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags DataEnrichmentServices
   * @name DataEnrichmentServicesCompareProfessions2
   * @summary Compare two professions based on the skills associated with each
   * @request POST:/v10/ontology/compare-professions
   * @originalName dataEnrichmentServicesCompareProfessions
   * @duplicate
   */
  dataEnrichmentServicesCompareProfessions2 = (data: CompareSkillsRequest, params: RequestParams = {}) =>
    this.request<CompareSkillsResponseStructuredResponseModel, any>({
      path: `/v10/ontology/compare-professions`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags DataEnrichmentServices
   * @name DataEnrichmentServicesCompareSkillsToProfession
   * @summary Compare a given set of skills to the skills related to a given profession.
   * @request POST:/v10/ontology/compareskillstoprofession
   */
  dataEnrichmentServicesCompareSkillsToProfession = (
    data: CompareSkillsToProfessionsRequest,
    params: RequestParams = {},
  ) =>
    this.request<CompareSkillsToProfessionsResponseStructuredResponseModel, any>({
      path: `/v10/ontology/compareskillstoprofession`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags DataEnrichmentServices
   * @name DataEnrichmentServicesCompareSkillsToProfession2
   * @summary Compare a given set of skills to the skills related to a given profession.
   * @request POST:/v10/ontology/compare-skills-to-profession
   * @originalName dataEnrichmentServicesCompareSkillsToProfession
   * @duplicate
   */
  dataEnrichmentServicesCompareSkillsToProfession2 = (
    data: CompareSkillsToProfessionsRequest,
    params: RequestParams = {},
  ) =>
    this.request<CompareSkillsToProfessionsResponseStructuredResponseModel, any>({
      path: `/v10/ontology/compare-skills-to-profession`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Parser
   * @name ParserParseResume
   * @summary Parses a Resume/CV
   * @request POST:/v10/parser/resume
   */
  parserParseResume = (data: StructuredParseResumeRequest, params: RequestParams = {}) =>
    this.request<ResumeParsingTransactionStructuredResponseModel, any>({
      path: `/v10/parser/resume`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Parser
   * @name ParserParseJobOrder
   * @summary Parses a Job Order
   * @request POST:/v10/parser/joborder
   */
  parserParseJobOrder = (data: StructuredParseJobOrderRequest, params: RequestParams = {}) =>
    this.request<JobParsingTransactionStructuredResponseModel, any>({
      path: `/v10/parser/joborder`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags DataEnrichmentServices
   * @name DataEnrichmentServicesProfessionsAutoComplete
   * @summary Returns normalized professions that begin with a given prefix, based on the chosen categories and language(s).
   * @request POST:/v10/professions/autocomplete
   */
  dataEnrichmentServicesProfessionsAutoComplete = (data: ProfessionsAutoCompleteRequest, params: RequestParams = {}) =>
    this.request<AutoCompleteProfessionsResponseStructuredResponseModel, any>({
      path: `/v10/professions/autocomplete`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags DataEnrichmentServices
   * @name DataEnrichmentServicesProfessionsNormalize
   * @summary Normalize the given job titles to the most closely-related professions in the taxonomy.
   * @request POST:/v10/professions/normalize
   */
  dataEnrichmentServicesProfessionsNormalize = (data: NormalizeProfessionsRequest, params: RequestParams = {}) =>
    this.request<SovrenNormalizeProfessionsResponseStructuredResponseModel, any>({
      path: `/v10/professions/normalize`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags DataEnrichmentServices
   * @name DataEnrichmentServicesProfessionsLookup
   * @summary Get details for the given professions in the taxonomy.
   * @request POST:/v10/professions/lookup
   */
  dataEnrichmentServicesProfessionsLookup = (data: LookupProfessionCodesRequest, params: RequestParams = {}) =>
    this.request<LookupProfessionCodesResponseStructuredResponseModel, any>({
      path: `/v10/professions/lookup`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags DataEnrichmentServices
   * @name DataEnrichmentServicesProfessionsTaxonomyMetadata
   * @summary Gets metadata about the professions taxonomy.
   * @request GET:/v10/professions/metadata
   */
  dataEnrichmentServicesProfessionsTaxonomyMetadata = (params: RequestParams = {}) =>
    this.request<TaxonomyMetadataStructuredResponseModel, any>({
      path: `/v10/professions/metadata`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Scorer
   * @name ScorerBimetricScoreResume
   * @summary Bimetric Score a resume against a set of target resumes and jobs
   * @request POST:/v10/scorer/bimetric/resume
   */
  scorerBimetricScoreResume = (data: ResumeBimetricMatchRequest, params: RequestParams = {}) =>
    this.request<StructuredBimetricMatchResponseStructuredResponseModel, any>({
      path: `/v10/scorer/bimetric/resume`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Scorer
   * @name ScorerBimetricScoreJob
   * @summary Bimetric Score a job against a set of target resumes and jobs
   * @request POST:/v10/scorer/bimetric/joborder
   */
  scorerBimetricScoreJob = (data: JobBimetricMatchRequest, params: RequestParams = {}) =>
    this.request<StructuredBimetricMatchResponseStructuredResponseModel, any>({
      path: `/v10/scorer/bimetric/joborder`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Searcher
   * @name SearcherPost
   * @summary Execute a search query
   * @request POST:/v10/searcher
   */
  searcherPost = (data: StructuredSearchRequest, params: RequestParams = {}) =>
    this.request<StructuredSearchResponseStructuredResponseModel, any>({
      path: `/v10/searcher`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Skills
   * @name SkillsGet
   * @summary Gets a list of available skills.
   * @request GET:/v10/skills
   */
  skillsGet = (params: RequestParams = {}) =>
    this.request<SkillResponseModelArrayStructuredResponseModel, any>({
      path: `/v10/skills`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Skills
   * @name SkillsPost
   * @summary Creates skill with given values. Overrides if exists.
   * @request POST:/v10/skills
   */
  skillsPost = (data: CreateSkillRequest, params: RequestParams = {}) =>
    this.request<SkillResponseModelStructuredResponseModel, any>({
      path: `/v10/skills`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Skills
   * @name SkillsGet0
   * @summary Gets the skills for a given name.
   * @request GET:/v10/skills/{key}
   */
  skillsGet0 = (key: string, params: RequestParams = {}) =>
    this.request<StringArrayStructuredResponseModel, any>({
      path: `/v10/skills/${key}`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Skills
   * @name SkillsPut
   * @summary Overrides the existing skill for the given key.
   * @request PUT:/v10/skills/{key}
   */
  skillsPut = (key: string, data: UpdateSkillRequest, params: RequestParams = {}) =>
    this.request<SkillResponseModelStructuredResponseModel, any>({
      path: `/v10/skills/${key}`,
      method: 'PUT',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Skills
   * @name SkillsDelete
   * @summary Deletes the skills for a given name.
   * @request DELETE:/v10/skills/{key}
   */
  skillsDelete = (key: string, params: RequestParams = {}) =>
    this.request<SkillResponseModelStructuredResponseModel, any>({
      path: `/v10/skills/${key}`,
      method: 'DELETE',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags DataEnrichmentServices
   * @name DataEnrichmentServicesSkillsAutoComplete
   * @summary Returns normalized skills that begin with a given prefix, based on the chosen categories and language(s).
   * @request POST:/v10/skills/autocomplete
   */
  dataEnrichmentServicesSkillsAutoComplete = (data: SkillsAutoCompleteRequest, params: RequestParams = {}) =>
    this.request<AutoCompleteSkillsResponseStructuredResponseModel, any>({
      path: `/v10/skills/autocomplete`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags DataEnrichmentServices
   * @name DataEnrichmentServicesSkillsLookup
   * @summary Get details for the given skills in the taxonomy.
   * @request POST:/v10/skills/lookup
   */
  dataEnrichmentServicesSkillsLookup = (data: LookupSkillCodesRequest, params: RequestParams = {}) =>
    this.request<LookupSkillCodesResponseStructuredResponseModel, any>({
      path: `/v10/skills/lookup`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags DataEnrichmentServices
   * @name DataEnrichmentServicesSkillsNormalize
   * @summary Normalize the given skills to the most closely-related skills in the taxonomy.
   * @request POST:/v10/skills/normalize
   */
  dataEnrichmentServicesSkillsNormalize = (data: NormalizeSkillsRequest, params: RequestParams = {}) =>
    this.request<NormalizeSkillsResponseStructuredResponseModel, any>({
      path: `/v10/skills/normalize`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags DataEnrichmentServices
   * @name DataEnrichmentServicesSkillsExtract
   * @summary Extracts known skills from the given text.
   * @request POST:/v10/skills/extract
   */
  dataEnrichmentServicesSkillsExtract = (data: ExtractSkillsRequest, params: RequestParams = {}) =>
    this.request<ExtractSkillsResponseStructuredResponseModel, any>({
      path: `/v10/skills/extract`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags DataEnrichmentServices
   * @name DataEnrichmentServicesSkillsTaxonomyMetadata
   * @summary Gets metadata about the skills taxonomy.
   * @request GET:/v10/skills/metadata
   */
  dataEnrichmentServicesSkillsTaxonomyMetadata = (params: RequestParams = {}) =>
    this.request<TaxonomyMetadataStructuredResponseModel, any>({
      path: `/v10/skills/metadata`,
      method: 'GET',
      format: 'json',
      ...params,
    });
}
