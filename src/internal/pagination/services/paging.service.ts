import { Injectable } from '@nestjs/common';
import {
  PAGING_MAX_PAGE,
  PAGING_MAX_PER_PAGE,
} from '../constants/pagination.constant';
import { IPaginationMeta } from 'src/internal/response/interfaces';

@Injectable()
export class PagingService {
  page(page: number): number {
    return page > PAGING_MAX_PAGE ? PAGING_MAX_PAGE : page;
  }

  take(perPage?: number): number {
    return perPage && perPage > PAGING_MAX_PER_PAGE
      ? PAGING_MAX_PER_PAGE
      : perPage;
  }

  skip(page: number, perPage: number): number {
    page = page > PAGING_MAX_PAGE ? PAGING_MAX_PAGE : page;
    perPage = perPage > PAGING_MAX_PER_PAGE ? PAGING_MAX_PER_PAGE : perPage;

    return (page - 1) * perPage;
  }

  totalPage(total: number, perPage: number) {
    const totalPage = Math.ceil(total / perPage) ?? 1;
    return totalPage > PAGING_MAX_PAGE ? PAGING_MAX_PAGE : totalPage;
  }

  transform<E = any>(
    _result: [E[], number],
    pagination: { page: number; take: number },
  ): { pagination: IPaginationMeta; data: E[] } {
    const { page, take } = pagination;

    const total = _result[1];
    const data = _result[0];
    const totalPage = this.totalPage(total, pagination.take);

    return {
      pagination: {
        total: 1 * total,
        totalPage: 1 * totalPage,
        currentPage: 1 * page,
        take: 1 * take,
      },
      data,
    };
  }
}
