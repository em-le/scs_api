import { HttpStatus, Module, ValidationPipe } from '@nestjs/common';
import { RequestMiddlewareModule } from './middleware/request-middleware.module';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [RequestMiddlewareModule],
  providers: [
    {
      provide: APP_PIPE,
      useFactory: () => {
        return new ValidationPipe({
          transform: true,
          skipNullProperties: false,
          skipUndefinedProperties: false,
          skipMissingProperties: false,
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        });
      },
    },
  ],
  exports: [],
})
export class RequestModule {}
