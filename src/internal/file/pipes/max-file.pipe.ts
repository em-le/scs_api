import {
  BadRequestException,
  Inject,
  Injectable,
  PipeTransform,
  Scope,
} from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { IFileValue } from '../interfaces/file.interface';
import { ConfigService } from 'src/internal/config/services/config.service';

@Injectable({ scope: Scope.REQUEST })
export class MaxPDFFilePipe implements PipeTransform {
  private readonly defaultMaxFile: number;
  constructor(
    @Inject(REQUEST)
    private readonly request: Request & { __maxFile: number },
    private readonly configSer: ConfigService,
  ) {
    this.defaultMaxFile = this.configSer.file.pdf.maxFile;
  }
  transform(value: IFileValue) {
    if (!Array.isArray(value)) {
      return value;
    }

    const compare = this.request?.__maxFile
      ? this.request.__maxFile
      : this.defaultMaxFile;

    if (value.length > compare) {
      throw new BadRequestException('file.error.maxFiles');
    }
    return value;
  }
}

@Injectable({ scope: Scope.REQUEST })
export class MaxZipFilePipe implements PipeTransform {
  private readonly defaultMaxFile: number;
  constructor(
    @Inject(REQUEST)
    private readonly request: Request & { __maxFile: number },
    private readonly configSer: ConfigService,
  ) {
    this.defaultMaxFile = this.configSer.file.zip.maxFile;
  }
  transform(value: IFileValue) {
    if (!Array.isArray(value)) {
      return value;
    }

    const compare = this.request?.__maxFile
      ? this.request.__maxFile
      : this.defaultMaxFile;

    if (value.length > compare) {
      throw new BadRequestException('file.error.maxFiles');
    }
    return value;
  }
}
