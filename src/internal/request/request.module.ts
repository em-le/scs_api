import { Module } from '@nestjs/common';

import { RequestMiddlewareModule } from './middleware/request-middleware.module';

@Module({
  imports: [RequestMiddlewareModule],
  providers: [],
  exports: [],
})
export class RequestModule {}
