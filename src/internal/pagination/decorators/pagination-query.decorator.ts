import { Query } from '@nestjs/common';
import { PaginationPagingPipe } from '../pipes/pagination-paging.pipe';
import { PAGING_MAX_FOR_EXPORT } from '../constants';

export function PaginationQuery(
  defaultPerPage: number = PAGING_MAX_FOR_EXPORT,
): ParameterDecorator {
  return Query(PaginationPagingPipe(defaultPerPage));
}
