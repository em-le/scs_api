import { applyDecorators } from '@nestjs/common';
import { IsEnum, IsOptional } from 'class-validator';
import { ToArray } from './transform.decorator';

export function EnumField<TEnum>(
  getEnum: () => TEnum,
  options: Partial<{
    each: boolean;
    isArray: boolean;
  }> = {},
): PropertyDecorator {
  const enumValue = getEnum() as any;
  const decorator = [IsEnum(enumValue as object, { each: options?.isArray })];
  if (options?.isArray) {
    decorator.push(ToArray());
  }
  return applyDecorators(...decorator);
}

export function EnumFieldOptional<TEnum>(
  getEnum: () => TEnum,
  options: { each?: boolean; isArray?: boolean } = {},
): PropertyDecorator {
  return applyDecorators(IsOptional(), EnumField(getEnum, { ...options }));
}
