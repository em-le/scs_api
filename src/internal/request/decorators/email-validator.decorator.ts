import { applyDecorators } from '@nestjs/common';
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export function EmailField(): PropertyDecorator {
  const decorators = [];
  decorators.push(IsEmail(), IsNotEmpty());
  return applyDecorators(...decorators);
}

export function EmailFieldOptional(): PropertyDecorator {
  return applyDecorators(IsOptional(), EmailField());
}
