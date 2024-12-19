import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as morgan from 'morgan';

import { IHttpLoggerLogger } from '../interfaces';
import { DEBUGGER_HTTP_FORMAT } from '../constants';
import { ConfigService } from 'src/internal/config/services/config.service';

@Injectable()
export class WriteIntoConsoleMiddleware implements NestMiddleware {
  private readonly writeIntoConsole: boolean;

  constructor(private readonly configSer: ConfigService) {
    const loggerConfig = this.configSer.logger;
    this.writeIntoConsole = loggerConfig.writeIntoConsole;
  }

  private async httpLogger(): Promise<IHttpLoggerLogger> {
    return {
      httpFormat: DEBUGGER_HTTP_FORMAT,
    };
  }

  async use(req: Request, res: Response, next: NextFunction): Promise<void> {
    if (this.writeIntoConsole) {
      const logger: IHttpLoggerLogger = await this.httpLogger();
      morgan(logger.httpFormat)(req, res, next);
    } else {
      next();
    }
  }
}
