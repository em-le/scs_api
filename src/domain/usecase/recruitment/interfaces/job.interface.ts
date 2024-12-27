import { IJobParser } from 'src/infra/repository/recruitment/interfaces';
import { IJob } from 'src/infra/repository/recruitment/interfaces/job.interface';

export class IJobAggregate {
  job: IJob;
  jobParser: IJobParser | null;
}
