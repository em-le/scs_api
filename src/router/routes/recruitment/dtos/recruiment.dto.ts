import { RecruitmentStatus } from 'src/infra/repository/recruitment/constants/recruitment.constant';
import {
  IRecruitment,
  IRecruitmentCreation,
} from 'src/infra/repository/recruitment/interfaces/recruitment.interface';
import {
  DateField,
  EnumField,
  NumberField,
  StringField,
} from 'src/internal/request/decorators';

export class CreateRecruitmentDto implements IRecruitmentCreation {
  @StringField({
    allowEmpty: false,
  })
  jobTitle: string;

  @StringField({
    allowEmpty: false,
  })
  jobDescription: string;

  @DateField()
  startDate: Date;

  @DateField()
  endDate: Date;

  @NumberField({
    isPositive: true,
  })
  numberOfOpenings: number;
}

export class UpdateRecruitmentDto
  extends CreateRecruitmentDto
  implements IRecruitment
{
  @EnumField(() => RecruitmentStatus)
  status: RecruitmentStatus;
}
