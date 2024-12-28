import { Injectable } from '@nestjs/common';
import { Types } from 'mongoose';
import { JobBimetrictService } from 'src/domain/service/recruitment/job-bimetric.service';

@Injectable()
export class GetJobBimetricUseCase {
  constructor(private readonly jobBimetrictService: JobBimetrictService) {}
  async execute(jobId: Types.ObjectId) {
    return this.jobBimetrictService.getJobBimetrict(jobId);
  }
}
