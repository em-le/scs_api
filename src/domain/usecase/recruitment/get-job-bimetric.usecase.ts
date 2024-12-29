import { Injectable } from '@nestjs/common';
import { Types } from 'mongoose';
import { JobBimetricService } from 'src/domain/service/recruitment/job-bimetric.service';

@Injectable()
export class GetJobBimetricUseCase {
  constructor(private readonly jobBimetricService: JobBimetricService) {}
  async execute(jobId: Types.ObjectId) {
    return this.jobBimetricService.getJobBimetrict(jobId);
  }
}
