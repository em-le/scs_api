import { UseInterceptors, applyDecorators } from '@nestjs/common';
import { PagingResponseInterceptor } from '../interceptors/paging-response.interceptor';

export function PagingResponse<T = any>(): MethodDecorator {
  return applyDecorators(UseInterceptors(PagingResponseInterceptor<T>));
}
