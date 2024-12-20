import {
  DynamicModule,
  ForwardReference,
  Global,
  Module,
  Type,
} from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { LoggerService } from './services/logger.service';
import { LoggerSettingService } from './services/logger-setting.service';
import { LoggerMiddlewareModule } from './middleware/debugger-middleware.module';

@Module({
  providers: [LoggerSettingService],
  exports: [LoggerSettingService],
  imports: [],
})
export class LoggerSettingModule {}

@Global()
@Module({})
export class LoggerModule {
  static forRoot(): DynamicModule {
    const imports: (
      | DynamicModule
      | Type<any>
      | Promise<DynamicModule>
      | ForwardReference<any>
    )[] = [];
    if (
      process.env.LOGGER_SYSTEM_WRITE_INTO_CONSOLE === 'true' ||
      process.env.LOGGER_SYSTEM_WRITE_INTO_FILE === 'true'
    ) {
      imports.push(
        WinstonModule.forRootAsync({
          imports: [LoggerSettingModule],
          inject: [LoggerSettingService],
          useFactory: (debuggerOptionsService: LoggerSettingService) =>
            debuggerOptionsService.createLogger(),
        }),
      );
    }
    return {
      module: LoggerModule,
      imports: [...imports, LoggerMiddlewareModule],
      providers: [LoggerService],
      exports: [LoggerService],
      controllers: [],
    };
  }
}
