import { LoggerOptions } from 'winston';

export interface ILoggerOptions {
  createLogger(): LoggerOptions;
}
