import { Exclude, Expose, Type } from 'class-transformer';
import { Types } from 'mongoose';
import { RecruitmentStatus } from 'src/infra/repository/recruitment/schemas/recruitment.constant';
import { IRecruitment } from 'src/infra/repository/recruitment/schemas/recruitment.interface';

@Exclude()
export class RecruitmentSerialization implements IRecruitment {
  @Type(() => String)
  _id: Types.ObjectId;

  @Expose()
  jobTitle: string;

  @Expose()
  jobDescription: string;

  @Expose()
  startDate: Date;

  @Expose()
  endDate: Date;

  @Expose()
  numberOfOpenings: number;

  @Expose()
  status: RecruitmentStatus;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}
