import { RotatingFileStream } from 'rotating-file-stream';

export interface IHttpLoggerConfigOptions {
  readonly stream: RotatingFileStream;
}

export interface IHttpLoggerLogger {
  readonly httpFormat: string;
  readonly httpLoggerOptions?: IHttpLoggerConfigOptions;
}

export interface ILog {
  description: string;
  class?: string;
  function?: string;
  path?: string;
}
