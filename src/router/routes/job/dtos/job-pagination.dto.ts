import { ParseStatus } from 'src/infra/repository/recruitment/constants';
import { BasePaginationDto } from 'src/internal/pagination/dtos/abstract-pagination.dto';
import {
  EnumFieldOptional,
  StringFieldOptional,
} from 'src/internal/request/decorators';

export class JobPaginationDto extends BasePaginationDto {
  @StringFieldOptional({
    isArray: true,
  })
  tags: string[];

  @EnumFieldOptional(() => ParseStatus, { isArray: true })
  parseStatuses: ParseStatus[];
}
