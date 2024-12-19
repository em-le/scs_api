import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  isNumber,
} from 'class-validator';
import { ToArray, ToLowerCase, ToUpperCase, Trim } from './transform.decorator';
import { applyDecorators } from '@nestjs/common';

export interface IStringFieldOptions {
  isArray?: boolean;
  minLength?: number;
  maxLength?: number;
  toLowerCase?: boolean;
  toUpperCase?: boolean;
  swagger?: boolean;
  allowEmpty?: boolean;
  trim?: boolean;
}

export function StringField(
  options: IStringFieldOptions = {},
): PropertyDecorator {
  const {
    isArray,
    minLength,
    maxLength,
    toLowerCase,
    toUpperCase,
    allowEmpty,
    trim,
  } = options;
  const decorators = [];

  if (isNumber(minLength)) {
    decorators.push(MinLength(minLength, { each: isArray }));
  }
  if (isNumber(maxLength)) {
    decorators.push(MaxLength(maxLength, { each: isArray }));
  }
  if (toUpperCase) {
    decorators.push(ToUpperCase());
  }
  if (toLowerCase) {
    decorators.push(ToLowerCase());
  }
  decorators.push(
    IsString({ each: isArray }),
    Type(() => String),
    Trim(),
  );

  if (isArray) {
    decorators.push(ToArray());
    if (allowEmpty === false) {
      decorators.push(ArrayNotEmpty());
    }
  } else if (allowEmpty === false) {
    decorators.push(IsNotEmpty());
  }

  if (trim !== false) {
    decorators.push(Trim());
  }
  return applyDecorators(...decorators);
}

export function StringFieldOptional(
  options: IStringFieldOptions = {},
): PropertyDecorator {
  return applyDecorators(IsOptional(), StringField(options));
}
