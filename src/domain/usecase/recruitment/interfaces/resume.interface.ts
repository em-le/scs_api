import {
  IResume,
  IResumeParser,
} from 'src/infra/repository/recruitment/interfaces';

export class IResumeAggregate {
  resume: IResume;
  resumeParser: IResumeParser | null;
}
