import { Injectable } from '@nestjs/common';
import {
  ResumeFormat,
  StorageType,
} from 'src/infra/repository/recruitment/constants';
import {
  IFileMetaData,
  IResumeCreation,
  IStorage,
} from 'src/infra/repository/recruitment/interfaces';
import { ResumeRepository } from 'src/infra/repository/recruitment/resume.repository';
import { IFile, IReadFile } from 'src/internal/file/interfaces/file.interface';
import { FileHelper } from 'src/internal/helper/services/file.helper';

@Injectable()
export class UploadResumeZipUseCase {
  constructor(
    private readonly resumeRepo: ResumeRepository,
    private readonly fileHelper: FileHelper,
  ) {}

  async execute(zip: IFile): Promise<void> {
    const readFiles = await this.fileHelper.extractZipHere(zip);
    await this.tryToUploadResumes(readFiles);
  }

  async tryToUploadResumes(readFiles: IReadFile[]) {
    try {
      const data = readFiles.map((readFile) => this.prepareData(readFile));
      await this.resumeRepo.createMany(data);
    } catch (error) {
      throw new Error(error?.message);
    }
  }

  private prepareData(file: IReadFile): IResumeCreation {
    const metaData: IFileMetaData = {
      size: 0,
      format: ResumeFormat.PDF,
      pages: 0,
    };
    const storage: IStorage = {
      location: file.path,
      storageType: StorageType.LOCAL,
    };
    return {
      fileName: file.originalName,
      fileMetaData: metaData,
      storage: storage,
      tags: [],
    };
  }
}
