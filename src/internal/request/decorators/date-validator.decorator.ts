import { Type } from 'class-transformer';
import { ArrayNotEmpty, IsDate, IsNotEmpty, IsOptional } from 'class-validator';
import { ToArray } from './transform.decorator';
import { applyDecorators } from '@nestjs/common';

export function DateField(
  options: {
    isArray?: boolean;
    allowEmpty?: boolean;
  } = {},
): PropertyDecorator {
  const { isArray, allowEmpty } = options;

  const decorators = [Type(() => Date), IsDate({ each: isArray })];
  if (isArray) {
    decorators.push(ToArray());
    if (allowEmpty === false) decorators.push(ArrayNotEmpty());
  }

  if (!isArray && allowEmpty === false) {
    decorators.push(IsNotEmpty());
  }
  return applyDecorators(...decorators);
}

export function DateFieldOptional(
  options: Partial<{ isArray: false; allowEmpty: boolean }> = {},
): PropertyDecorator {
  return applyDecorators(IsOptional(), DateField({ ...options }));
}
