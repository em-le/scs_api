import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { IFileValue } from '../interfaces/file.interface';

@Injectable()
export class FileRequiredPipe implements PipeTransform {
  transform(value: IFileValue) {
    this.validate(value);
    return value;
  }

  validate(value: IFileValue): void {
    if (!value || (Array.isArray(value) && !value.length)) {
      throw new BadRequestException('file.error.notFound');
    }
  }
}
