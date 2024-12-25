import {
  PipeTransform,
  Injectable,
  Scope,
  Inject,
  BadRequestException,
} from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { IFileValue } from '../interfaces/file.interface';
import { FileHelper } from 'src/internal/helper/services/file.helper';
import { ConfigService } from 'src/internal/config/services/config.service';

@Injectable({
  scope: Scope.REQUEST,
})
export class PDFFileSizePipe implements PipeTransform {
  private readonly defaultMaxFileSize: number;
  constructor(
    @Inject(REQUEST)
    private readonly request: Request & { __fileSize: string },
    private readonly configSer: ConfigService,
    private readonly fileHelper: FileHelper,
  ) {
    this.defaultMaxFileSize = configSer.file.pdf.maxFileSize;
  }
  async transform(value: IFileValue) {
    const files = Array.isArray(value) ? value : [value];
    files.forEach((file) => this.validate(file.size));
    return value;
  }
  validate(fileSize: number): void {
    const maxFileSizeSet = this.request?.__fileSize
      ? this.fileHelper.convertToBytes(this.request?.__fileSize)
      : this.defaultMaxFileSize;

    if (fileSize > maxFileSizeSet) {
      throw new BadRequestException('file.error.sizeInvalid');
    }
  }
}

@Injectable({
  scope: Scope.REQUEST,
})
export class ZipFileSizePipe implements PipeTransform {
  private readonly defaultMaxFileSize: number;
  constructor(
    @Inject(REQUEST)
    private readonly request: Request & { __fileSize: string },
    private readonly configSer: ConfigService,
    private readonly fileHelper: FileHelper,
  ) {
    this.defaultMaxFileSize = configSer.file.zip.maxFileSize;
  }
  async transform(value: IFileValue) {
    const files = Array.isArray(value) ? value : [value];
    files.forEach((file) => this.validate(file.size));
    return value;
  }
  validate(fileSize: number): void {
    const maxFileSizeSet = this.request?.__fileSize
      ? this.fileHelper.convertToBytes(this.request?.__fileSize)
      : this.defaultMaxFileSize;

    if (fileSize > maxFileSizeSet) {
      throw new BadRequestException('file.error.sizeInvalid');
    }
  }
}
