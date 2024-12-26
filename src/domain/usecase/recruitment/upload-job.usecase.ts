import { Injectable } from '@nestjs/common';
import { JobPaserService } from 'src/domain/service/recruitment/job-parser.service';
import {
  ResumeFormat,
  StorageType,
} from 'src/infra/repository/recruitment/constants';
import {
  IFileMetaData,
  IStorage,
} from 'src/infra/repository/recruitment/interfaces';
import { IJobCreation } from 'src/infra/repository/recruitment/interfaces/job.interface';
import { JobRepository } from 'src/infra/repository/recruitment/job.repository';
import { JobDocument } from 'src/infra/repository/recruitment/schemas/job.schema';
import { IFile } from 'src/internal/file/interfaces/file.interface';

@Injectable()
export class UploadJobUseCase {
  constructor(
    private readonly jobRepo: JobRepository,
    private readonly jobPaserService: JobPaserService,
  ) {}
  async execute(job: IFile): Promise<any> {
    try {
      const metaData: IFileMetaData = {
        size: 0,
        format: ResumeFormat.PDF,
        pages: 0,
      };
      const storage: IStorage = {
        location: job.path,
        storageType: StorageType.LOCAL,
      };

      const jobOrder = await this.createJob({
        fileName: job.originalname,
        fileMetaData: metaData,
        storage: storage,
        tags: [],
      });
      await this.jobPaserService.parseJob(jobOrder._id);
      return jobOrder;
    } catch (error) {
      throw new Error(error?.message);
    }
  }

  private async createJob(data: IJobCreation): Promise<JobDocument> {
    return await this.jobRepo.create(data);
  }
}
