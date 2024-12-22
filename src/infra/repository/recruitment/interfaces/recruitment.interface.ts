import { RecruitmentStatus } from '../constants/recruitment.constant';

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
