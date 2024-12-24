import { Types } from 'mongoose';
import { ResumeData } from 'src/infra/textkernel/openapi/data-contracts';

export interface IResumeParserCreation {
  resume: Types.ObjectId;
  ResumeData: ResumeData;
  RedactedResumeData: ResumeData;
}

export interface IResumeParser extends IResumeParserCreation {}
