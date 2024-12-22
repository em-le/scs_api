import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { FILE_SIZE_META_KEY } from '../constants/file-meta-key.constant';

@Injectable()
export class FileSizeInterceptor implements NestInterceptor {
  constructor(private readonly reflector: Reflector) {}
  intercept(
    ctx: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    if (ctx.getType() === 'http') {
      const request = ctx.switchToHttp().getRequest();
      const fileSize = this.reflector.get<string>(
        FILE_SIZE_META_KEY,
        ctx.getHandler(),
      );
      request.__fileSize = fileSize;
    }
    return next.handle();
  }
}
