import { Injectable, PipeTransform, Scope, Type, mixin } from '@nestjs/common';

import { PagingService } from '../services/paging.service';
import { BasePaginationDto } from '../dtos/abstract-pagination.dto';
import { PAGING_MAX_FOR_EXPORT } from '../constants';

export function PaginationPagingPipe(
  defaultPerPage: number = PAGING_MAX_FOR_EXPORT,
): Type<PipeTransform> {
  @Injectable({
    scope: Scope.REQUEST,
  })
  class PaginationPagingClassPipe implements PipeTransform {
    constructor(private readonly pagingSer: PagingService) {}

    transform(value: BasePaginationDto): BasePaginationDto {
      const page = this.pagingSer.page(value?.page ?? 1);
      let take = this.pagingSer.take(value?.take ?? defaultPerPage);
      if (value?.all) {
        take = value?.take ? 1 * value?.take : PAGING_MAX_FOR_EXPORT;
      }
      const skip = this.pagingSer.skip(page, take);
      return {
        ...value,
        page,
        take,
        skip,
      };
    }
  }
  return mixin(PaginationPagingClassPipe);
}
