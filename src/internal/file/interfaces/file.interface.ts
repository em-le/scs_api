import {
  FILE_PDF_MIME,
  FILE_IMAGE_MIME,
} from '../constants/file-type.constant';

export type IFile = Express.Multer.File;
export type IFileValue = IFile | IFile[];

export type IExtractedFile<T = Record<string, any>> = IFile & {
  extract: Record<string, any>[];
  dto?: T[];
};

export type IFileTypes = FILE_IMAGE_MIME[] | FILE_PDF_MIME[];
export interface IReadFile {
  originalName: string;
  path: string;
}
