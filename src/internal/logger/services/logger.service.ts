import { Inject, Injectable } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger as WinstonLogger, LogMethod } from 'winston';
import { ILog } from '../interfaces';
type WinstonClientLogger = WinstonLogger & { client: LogMethod };
@Injectable()
export class LoggerService {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER)
    private readonly logger: WinstonClientLogger,
  ) {}

  info(log: ILog, ctx?: any): void {
    this.logger.info(log.description, {
      class: log.class,
      function: log.function,
      path: log.path,
      ctx,
    });
  }

  error(log: ILog, ctx?: any): void {
    this.logger.error(log.description, {
      class: log.class,
      function: log.function,
      path: log.path,
      ctx,
    });
  }

  warn(log: ILog, ctx?: any): void {
    this.logger.warn(log.description, {
      class: log.class,
      function: log.function,
      path: log.path,
      ctx,
    });
  }

  debug(log: ILog, ctx?: any): void {
    this.logger.debug(log.description, {
      class: log.class,
      function: log.function,
      path: log.path,
      ctx,
    });
  }
}
