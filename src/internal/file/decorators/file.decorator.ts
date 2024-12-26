import {
  applyDecorators,
  UseInterceptors,
  SetMetadata,
  UploadedFile,
  UploadedFiles,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import {
  FILE_MAX_FILES_META_KEY,
  FILE_SIZE_META_KEY,
  FILE_TYPE_META_KEY,
} from '../constants/file-meta-key.constant';
import {
  IUploadFileOptions,
  UploadSingleFileOptions,
} from '../interfaces/upload-single-file-options.interface';
import { diskStorage } from 'multer';
import { FileDestination, FileName } from '../constants/file.constant';
import {
  FileRequiredPipe,
  MaxPDFFilePipe,
  MaxZipFilePipe,
  PDFFileSizePipe,
  PDFFileTypePipe,
  ZipFileSizePipe,
  ZipFileTypePipe,
} from '../pipes';
import {
  FileSizeInterceptor,
  FileTypeInterceptor,
  MaxFileInterceptor,
} from '../interceptors';

export function UploadFileSingle(
  fieldName: string,
  destination: string,
  options?: UploadSingleFileOptions,
): MethodDecorator {
  const decorators = [];
  if (options?.fileSize !== void 0) {
    decorators.push(
      UseInterceptors(FileSizeInterceptor),
      SetMetadata(FILE_SIZE_META_KEY, options.fileSize),
    );
  }
  if (options?.allowTypes?.length) {
    decorators.push(
      UseInterceptors(FileTypeInterceptor),
      SetMetadata(FILE_TYPE_META_KEY, options.allowTypes),
    );
  }
  if (options?.maxFiles) {
    decorators.push(
      UseInterceptors(MaxFileInterceptor),
      SetMetadata(FILE_MAX_FILES_META_KEY, options?.maxFiles),
    );
  }
  decorators.push(
    UseInterceptors(
      FileInterceptor(fieldName, {
        storage: diskStorage({
          destination: FileDestination(destination, options?.isPublic),
          filename: FileName(),
        }),
      }),
    ),
  );

  return applyDecorators(...decorators);
}

export function UploadFilesToStorage(
  fieldName: string,
  destination: string,
  options?: UploadSingleFileOptions,
): MethodDecorator {
  const decorators = [];
  if (options?.fileSize !== void 0) {
    decorators.push(
      UseInterceptors(FileSizeInterceptor),
      SetMetadata(FILE_SIZE_META_KEY, options.fileSize),
    );
  }
  if (options?.allowTypes?.length) {
    decorators.push(
      UseInterceptors(FileTypeInterceptor),
      SetMetadata(FILE_TYPE_META_KEY, options.allowTypes),
    );
  }
  if (options?.maxFiles) {
    decorators.push(
      UseInterceptors(MaxFileInterceptor),
      SetMetadata(FILE_MAX_FILES_META_KEY, options?.maxFiles),
    );
  }
  decorators.push(
    UseInterceptors(
      FilesInterceptor(fieldName, options?.maxFiles ? options.maxFiles : 1, {
        storage: diskStorage({
          destination: FileDestination(destination),
          filename: FileName(),
        }),
      }),
    ),
  );
  return applyDecorators(...decorators);
}

export function UploadPDFFileParam(
  options?: IUploadFileOptions,
): ParameterDecorator {
  const pipes = [];
  if (options?.required || options?.required === void 0) {
    pipes.push(FileRequiredPipe);
  }
  if (options?.checkSize || options?.checkSize === void 0) {
    pipes.push(PDFFileSizePipe);
  }
  if (options?.checkType || options?.checkType === void 0) {
    pipes.push(PDFFileTypePipe);
  }
  if (options?.checkMaxFiles || options?.checkMaxFiles === void 0) {
    pipes.push(MaxPDFFilePipe);
  }

  if (options?.multiple) {
    return UploadedFiles(...pipes);
  }
  return UploadedFile(...pipes);
}

export function UploadZipFileParam(
  options?: IUploadFileOptions,
): ParameterDecorator {
  const pipes = [];
  if (options?.required || options?.required === void 0) {
    pipes.push(FileRequiredPipe);
  }
  if (options?.checkSize || options?.checkSize === void 0) {
    pipes.push(ZipFileSizePipe);
  }
  if (options?.checkType || options?.checkType === void 0) {
    pipes.push(ZipFileTypePipe);
  }
  if (options?.checkMaxFiles || options?.checkMaxFiles === void 0) {
    pipes.push(MaxZipFilePipe);
  }

  if (options?.multiple) {
    return UploadedFiles(...pipes);
  }
  return UploadedFile(...pipes);
}
