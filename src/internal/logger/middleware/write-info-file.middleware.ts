import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as morgan from 'morgan';
import { createStream } from 'rotating-file-stream';

import { DEBUGGER_HTTP_FORMAT, DEBUGGER_HTTP_NAME } from '../constants';
import { DateHelper } from 'src/internal/helper/services/date.helper';
import { ConfigService } from 'src/internal/config/services/config.service';
import { IHttpLoggerLogger } from '../interfaces';

@Injectable()
export class WriteIntoFileMiddleware implements NestMiddleware {
  private readonly writeIntoFile: boolean = true;
  private readonly maxFile: number = 30;
  private readonly maxSize: string = '20M';

  constructor(
    private readonly configSer: ConfigService,
    private readonly dateHelper: DateHelper,
  ) {
    this.writeIntoFile = configSer.logger.writeIntoFile;
  }

  use(req: Request, res: Response, next: NextFunction): void {
    if (this.writeIntoFile) {
      const logger = this.httpLogger();
      morgan(logger.httpFormat, logger.httpLoggerOptions)(req, res, next);
    } else {
      next();
    }
  }

  private httpLogger(): IHttpLoggerLogger {
    const date = this.dateHelper.getDate();
    return {
      httpFormat: DEBUGGER_HTTP_FORMAT,
      httpLoggerOptions: {
        stream: createStream(`${date}.log`, {
          path: `./logs/${DEBUGGER_HTTP_NAME}/`,
          maxSize: this.maxSize,
          maxFiles: this.maxFile,
          compress: true,
          interval: '1d',
        }),
      },
    };
  }
}
