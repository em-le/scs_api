import { ResumeData } from 'src/infra/textkernel/openapi/data-contracts';

export interface IResumeParserCreation {
  ResumeData: ResumeData;
}

export interface IResumeParser extends IResumeParserCreation {}
