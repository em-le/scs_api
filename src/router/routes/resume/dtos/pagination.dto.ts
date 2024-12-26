import { BasePaginationDto } from 'src/internal/pagination/dtos/abstract-pagination.dto';
import { StringFieldOptional } from 'src/internal/request/decorators';

export class ResumePaginationDto extends BasePaginationDto {
  @StringFieldOptional({ isArray: true })
  tags: string[];
}
