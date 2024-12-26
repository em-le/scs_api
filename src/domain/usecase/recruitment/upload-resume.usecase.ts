import { Injectable } from '@nestjs/common';
import { ResumeRepository } from 'src/infra/repository/recruitment/resume.repository';
import { IFile } from 'src/internal/file/interfaces/file.interface';
import { ResumeDocument } from 'src/infra/repository/recruitment/schemas/resume.schema';
import {
  IFileMetaData,
  IResumeCreation,
  IStorage,
} from 'src/infra/repository/recruitment/interfaces';
import {
  ResumeFormat,
  StorageType,
} from 'src/infra/repository/recruitment/constants';

@Injectable()
export class UploadResumeUseCase {
  constructor(private readonly resumeRepo: ResumeRepository) {}

  async execute(resume: IFile): Promise<ResumeDocument> {
    return await this.tryToUploadResume(resume);
  }

  private async tryToUploadResume(resume: IFile): Promise<ResumeDocument> {
    try {
      const metaData: IFileMetaData = {
        size: 0,
        format: ResumeFormat.PDF,
        pages: 0,
      };
      const storage: IStorage = {
        location: resume.path,
        storageType: StorageType.LOCAL,
      };

      return await this.createResume({
        fileName: resume.originalname,
        fileMetaData: metaData,
        storage: storage,
        tags: [],
      });
    } catch (error) {
      throw new Error(error?.message);
    }
  }

  private async createResume(data: IResumeCreation): Promise<ResumeDocument> {
    return await this.resumeRepo.create(data);
  }
}
