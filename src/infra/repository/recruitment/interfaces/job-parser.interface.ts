import { Types } from 'mongoose';
import { JobData } from 'src/infra/textkernel/openapi/data-contracts';

export interface IJobParserCreation {
  job: Types.ObjectId;
  JobData: JobData;
}

export interface IJobParser extends IJobParserCreation {}
