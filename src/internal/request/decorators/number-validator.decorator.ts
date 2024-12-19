import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  Max,
  Min,
  isNumber,
} from 'class-validator';
import { applyDecorators } from '@nestjs/common';
import { ToArray } from './transform.decorator';

interface INumberFieldOptions {
  isArray?: boolean;
  minimum?: number;
  maximum?: number;
  int?: boolean;
  isPositive?: boolean;
  swagger?: boolean;
}

export function NumberField(
  options: INumberFieldOptions = {},
): PropertyDecorator {
  const { isArray, minimum, maximum, int, isPositive } = options;
  const decorators = [];

  if (isNumber(minimum)) {
    decorators.push(Min(minimum, { each: isArray }));
  }

  if (isNumber(maximum)) {
    decorators.push(Max(maximum, { each: isArray }));
  }
  if (isPositive) {
    decorators.push(IsPositive({ each: isArray }));
  }
  if (int) {
    decorators.push(IsInt({ each: isArray }));
  } else {
    decorators.push(IsNumber({}, { each: isArray }));
  }
  if (isArray) {
    decorators.push(
      Type(() => Number),
      ToArray(),
      ArrayNotEmpty(),
    );
  } else {
    decorators.push(
      Type(() => Number),
      IsNotEmpty(),
    );
  }
  return applyDecorators(...decorators);
}

export function NumberFieldOptional(
  options: Partial<{
    each: boolean;
    int: boolean;
    isPositive: boolean;
  }> = {},
): PropertyDecorator {
  return applyDecorators(IsOptional(), NumberField(options));
}
