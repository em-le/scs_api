import { Injectable } from '@nestjs/common';
import * as winston from 'winston';
import { LoggerOptions } from 'winston';

import { ILoggerOptions } from '../interfaces/logger-option.interface';
import DailyRotateFile = require('winston-daily-rotate-file');
import { LEVELS } from '../constants';
import { join } from 'path';
import { ConfigService } from 'src/internal/config/services/config.service';

const LEVEL = Symbol.for('level');
function filterOnly(level) {
  return winston.format(function (info) {
    if (info[LEVEL] === level) {
      return info;
    }
  })();
}

@Injectable()
export class LoggerSettingService implements ILoggerOptions {
  private readonly writeIntoFile: boolean = false;
  private readonly writeIntoConsole: boolean = false;

  private readonly maxSize: string = '';
  private readonly maxFile: string = '';
  private readonly systemName: string = 'system';
  private readonly clientName: string = 'client';

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

      transports.push(
        new DailyRotateFile({
          filename: `%DATE%.log`,
          format: filterOnly('postgres'),
          dirname: `${logDir}/${this.systemName}/postgres`,
          datePattern: 'YYYY-MM-DD',
          zippedArchive: true,
          maxSize: this.maxSize,
          maxFiles: this.maxFile,
          level: 'postgres',
        }),
      );

      transports.push(
        new DailyRotateFile({
          filename: `%DATE%.log`,
          format: filterOnly('oracle'),
          dirname: `${logDir}/${this.systemName}/oracle`,
          datePattern: 'YYYY-MM-DD',
          zippedArchive: true,
          maxSize: this.maxSize,
          maxFiles: this.maxFile,
          level: 'oracle',
        }),
      );

      transports.push(
        new DailyRotateFile({
          filename: `%DATE%.log`,
          format: filterOnly('client'),
          dirname: `${logDir}/${this.clientName}`,
          datePattern: 'YYYY-MM-DD',
          zippedArchive: true,
          maxSize: this.maxSize,
          maxFiles: this.maxFile,
          level: 'client',
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
