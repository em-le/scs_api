import { JobData } from 'src/infra/textkernel/openapi/data-contracts';

export interface IJobParserCreation {
  JobData: JobData;
}

export interface IJobParser extends IJobParserCreation {}
