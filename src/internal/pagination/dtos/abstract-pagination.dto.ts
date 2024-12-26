import {
  EnumFieldOptional,
  NumberFieldOptional,
} from 'src/internal/request/decorators';

export class BasePaginationDto {
  all?: boolean;

  @NumberFieldOptional()
  page: number;

  @NumberFieldOptional()
  take: number;

  skip: number;
}
