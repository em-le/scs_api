import { ParseStatus } from '../constants';
import { IFileMetaData, IStorage } from './recruitment.interface';

export interface IResumeCreation {
  fileName: string;
  fileMetaData: IFileMetaData;
  storage: IStorage;
  tags: string[];
}

export interface IResume extends IResumeCreation {
  parseStatus: ParseStatus;
}
