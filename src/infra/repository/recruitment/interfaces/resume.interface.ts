import { ResumeFormat, ResumeParseStatus, StorageType } from '../constants';

export interface IFileMetaData {
  size: number;
  format: ResumeFormat;
  pages: number;
}

export interface IStorage {
  location: string;
  storageType: StorageType;
}

export interface IResumeCreation {
  fileName: string;
  fileMetaData: IFileMetaData;
  storage: IStorage;
  tags: string[];
}

export interface IResume extends IResumeCreation {
  parseStatus: ResumeParseStatus;
}
