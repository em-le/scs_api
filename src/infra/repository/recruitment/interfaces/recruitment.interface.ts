import {
  RecruitmentStatus,
  ResumeFormat,
  StorageType,
} from '../constants/recruitment.constant';

export interface IFileMetaData {
  size: number;
  format: ResumeFormat;
  pages: number;
}

export interface IStorage {
  location: string;
  storageType: StorageType;
}

export interface IRecruitmentCreation {
  jobTitle: string;
  jobDescription: string;
  startDate: Date;
  endDate: Date;
  numberOfOpenings: number;
}

export interface IRecruitment extends IRecruitmentCreation {
  status: RecruitmentStatus;
}
