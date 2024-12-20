import { Injectable } from '@nestjs/common';
import * as winston from 'winston';
import { LoggerOptions } from 'winston';

import { ILoggerOptions } from '../interfaces/logger-option.interface';
import DailyRotateFile = require('winston-daily-rotate-file');
import { LEVELS } from '../constants';
import { join } from 'path';
import { ConfigService } from 'src/internal/config/services/config.service';

const LEVEL = Symbol.for('level');
const filterOnly = (level: string) => {
  return winston.format((info) => (info[LEVEL] === level ? info : void 0))();
};

@Injectable()
export class LoggerSettingService implements ILoggerOptions {
  private readonly writeIntoFile: boolean = false;
  private readonly writeIntoConsole: boolean = false;

  private readonly maxSize: string = '';
  private readonly maxFile: string = '';
  private readonly systemName: string = 'system';

  constructor(private readonly configSer: ConfigService) {
    const debuggerConfig = configSer.logger;

    this.writeIntoConsole = debuggerConfig.writeIntoConsole;
    this.writeIntoFile = debuggerConfig.writeIntoFile;
    this.maxFile = debuggerConfig.maxFile;
    this.maxSize = debuggerConfig.maxSize;
  }

  createLogger(): LoggerOptions {
    const logDir = join(__dirname, '..', '..', '..', 'logs');
    const transports = [];
    if (this.writeIntoFile) {
      transports.push(
        new DailyRotateFile({
          filename: `%DATE%.log`,
          format: filterOnly('error'),
          dirname: `${logDir}/${this.systemName}/error`,
          datePattern: 'YYYY-MM-DD',
          zippedArchive: true,
          maxSize: this.maxSize,
          maxFiles: this.maxFile,
          level: 'error',
        }),
      );

      transports.push(
        new DailyRotateFile({
          filename: `%DATE%.log`,
          format: filterOnly('warn'),
          dirname: `${logDir}/${this.systemName}/warn`,
          datePattern: 'YYYY-MM-DD',
          zippedArchive: true,
          maxSize: this.maxSize,
          maxFiles: this.maxFile,
          level: 'warn',
        }),
      );

      transports.push(
        new DailyRotateFile({
          filename: `%DATE%.log`,
          format: filterOnly('info'),
          dirname: `${logDir}/${this.systemName}/info`,
          datePattern: 'YYYY-MM-DD',
          zippedArchive: true,
          maxSize: this.maxSize,
          maxFiles: this.maxFile,
          level: 'info',
        }),
      );

      transports.push(
        new DailyRotateFile({
          filename: `%DATE%.log`,
          format: filterOnly('debug'),
          dirname: `${logDir}/${this.systemName}/debug`,
          datePattern: 'YYYY-MM-DD',
          zippedArchive: true,
          maxSize: this.maxSize,
          maxFiles: this.maxFile,
          level: 'debug',
        }),
      );
    }

    if (this.writeIntoConsole) {
      transports.push(new winston.transports.Console());
    }

    return {
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.prettyPrint(),
      ),
      transports,
      levels: LEVELS,
    };
  }
}
