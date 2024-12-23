import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { FILE_TYPE_META_KEY } from '../constants/file-meta-key.constant';
import { IFileTypes } from '../interfaces/file.interface';
@Injectable()
export class FileTypeInterceptor implements NestInterceptor {
  constructor(private readonly reflector: Reflector) {}
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    if (context.getType() === 'http') {
      const request = context.switchToHttp().getRequest();
      const allowTypes =
        this.reflector.get<IFileTypes>(
          FILE_TYPE_META_KEY,
          context.getHandler(),
        ) ?? [];
      request.__allowTypes = allowTypes;
    }

    return next.handle();
  }
}
