import {
  BadRequestException,
  Inject,
  Injectable,
  PipeTransform,
  Scope,
} from '@nestjs/common';
import { FILE_PDF_MIME } from '../constants/file-type.constant';
import { IFile, IFileTypes, IFileValue } from '../interfaces/file.interface';
import { REQUEST } from '@nestjs/core';

@Injectable({ scope: Scope.REQUEST })
export class PDFFileTypePipe implements PipeTransform {
  constructor(
    @Inject(REQUEST)
    private readonly request: Request & { __allowTypes: IFileTypes },
  ) {}
  async transform(value: IFileValue) {
    const files = Array.isArray(value) ? value : [value];
    files.forEach((file: IFile) => this.validate(file.mimetype));
    return value;
  }

  validate(fileType: string): void {
    console.log(fileType);
    const allowFileTypes = this.request?.__allowTypes
      ? this.request?.__allowTypes
      : Object.values(FILE_PDF_MIME);
    if (allowFileTypes.findIndex((type: string) => type === fileType) === -1) {
      throw new BadRequestException('file.error.mimeInvalid');
    }
  }
}
