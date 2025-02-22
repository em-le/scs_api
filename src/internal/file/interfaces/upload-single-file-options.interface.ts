import { IFileTypes } from '../interfaces/file.interface';

export interface UploadSingleFileOptions {
  isPublic: boolean;
  fileSize?: string;
  allowTypes?: IFileTypes;
  maxFiles?: number;
  headerRow?: number;
}

export interface IUploadFileOptions {
  multiple?: boolean;
  required?: boolean;
  checkMaxFiles?: boolean;
  checkSize?: boolean;
  checkType?: boolean;
}
