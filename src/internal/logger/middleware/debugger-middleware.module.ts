import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { HttpLoggerMiddleware } from './http-logger.middleware';
import { WriteIntoFileMiddleware } from './write-info-file.middleware';
import { WriteIntoConsoleMiddleware } from './write-info-console.middleware';

@Module({})
export class LoggerMiddlewareModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        HttpLoggerMiddleware,
        WriteIntoFileMiddleware,
        WriteIntoConsoleMiddleware,
      )
      .forRoutes('*');
  }
}
