import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { FILE_MAX_FILES_META_KEY } from '../constants/file-meta-key.constant';

@Injectable()
export class MaxFileInterceptor implements NestInterceptor {
  constructor(private readonly reflector: Reflector) {}
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    if (context.getType() === 'http') {
      const request = context.switchToHttp().getRequest();
      const maxFile = this.reflector.get(
        FILE_MAX_FILES_META_KEY,
        context.getHandler(),
      );
      request.__maxFile = maxFile;
    }

    return next.handle();
  }
}
