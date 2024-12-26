import { applyDecorators } from '@nestjs/common';
import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsMongoId,
  IsOptional,
  IsString,
  ValidateIf,
} from 'class-validator';
import { Types } from 'mongoose';

export function IsMongoIdFiled(
  options: {
    required?: boolean;
    isArray?: boolean;
    allowEmpty?: boolean;
  } = {},
): PropertyDecorator {
  const { required, isArray, allowEmpty } = options;
  const decorators = [IsMongoId({ each: isArray })];

  decorators.push(
    IsString({ each: isArray }),
    Type(() => Types.ObjectId),
  );
  if (allowEmpty !== false && isArray) {
    decorators.push(ArrayNotEmpty());
  }
  if (allowEmpty !== false && !isArray) {
    decorators.push(
      ValidateIf((_, value) => required !== false && value.length !== ''),
    );
  }

  return applyDecorators(...decorators);
}

export function IsMongoIdFiledOptional(
  options: {
    isArray?: boolean;
    allowEmpty?: boolean;
  } = {},
): PropertyDecorator {
  return applyDecorators(
    IsOptional(),
    IsMongoIdFiled({ required: false, ...options }),
  );
}
