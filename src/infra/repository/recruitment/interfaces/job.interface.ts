import { ParseStatus } from '../constants';
import { IFileMetaData, IStorage } from './recruitment.interface';

export interface IJobCreation {
  fileName: string;
  fileMetaData: IFileMetaData;
  storage: IStorage;
  tags: string[];
}

export interface IJob extends IJobCreation {
  parseStatus: ParseStatus;
}
