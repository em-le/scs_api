import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import * as qs from 'qs';
import { PagingResponseSerialization } from '../serializations/paging-response.serialization';
import { IPaginationCursorMeta, IPagingResponse } from '../interfaces';
import { IWrapperAppRequest } from 'src/internal/request/interfaces';

@Injectable()
export class PagingResponseInterceptor<T extends Record<string, any>>
  implements NestInterceptor<Promise<T>>
{
  async intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Promise<Observable<Promise<PagingResponseSerialization<T>>>> {
    if (context.getType() === 'http') {
      return next.handle().pipe(
        map(async (originalRes: Promise<IPagingResponse<T>>) => {
          const httpCtx = context.switchToHttp();
          const appWrapperReq = httpCtx.getResponse<IWrapperAppRequest>();
          const appReq = appWrapperReq.req;
          const pagingRes = await originalRes;

          const { data, pagination } = pagingRes;
          if (data && pagination) {
            const { totalPage, take, currentPage } = pagination;
            const { query, path } = appReq;
            const numberPage = 1 * currentPage;
            if (query?.take) query.take = void 0;
            if (query?.page) query.page = void 0;
            const queryString = qs.stringify(query, {
              encode: false,
            });
            const cursor: IPaginationCursorMeta = {
              nextPage:
                numberPage < totalPage
                  ? `${path}?take=${take}&page=${numberPage + 1}&${queryString}`
                  : '',
              previousPage:
                numberPage > 1
                  ? `${path}?take=${take}&page=${numberPage - 1}&${queryString}`
                  : '',
              firstPage:
                totalPage > 1
                  ? `${path}?take=${take}&page=${1}&${queryString}`
                  : '',
              lastPage:
                totalPage > 1
                  ? `${path}?take=${take}&page=${totalPage}&${queryString}`
                  : '',
            };

            const appPagingRes: PagingResponseSerialization<T> = {
              cursor: cursor,
              pagination: pagination,
              data: data,
            };
            return appPagingRes;
          }
        }),
      );
    }
    return next.handle();
  }
}
