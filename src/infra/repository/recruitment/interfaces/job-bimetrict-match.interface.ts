import { Types } from 'mongoose';
import {
  BimetricMatchResult,
  CategoryWeights,
} from 'src/infra/textkernel/openapi/data-contracts';

export interface IJobBimetrictMatchTarget {
  jobId: Types.ObjectId;
  resumeIds: Types.ObjectId[];
  jobParserId: Types.ObjectId;
  resumeParserIds: Types.ObjectId[];
}

export interface IJobBimetrictMatchCreation extends IJobBimetrictMatchTarget {
  Matches?: BimetricMatchResult[] | null;
  SuggestedCategoryWeights?: CategoryWeights;
  AppliedCategoryWeights?: CategoryWeights;
}

export interface IJobBimetrictMatch extends IJobBimetrictMatchCreation {}
