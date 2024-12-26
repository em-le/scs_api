import { ResumeFormat, StorageType } from '../constants/recruitment.constant';

export interface IFileMetaData {
  size: number;
  format: ResumeFormat;
  pages: number;
}

export interface IStorage {
  location: string;
  storageType: StorageType;
}
