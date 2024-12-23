import { Injectable } from '@nestjs/common';
import { ConfigService as NestJSService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';
import { HTTP_METHOD } from 'src/internal/request/constants';
import * as bytes from 'bytes';

@Injectable()
export class ConfigService {
  constructor(private readonly nestJSSer: NestJSService) {}

  get isDevelopment() {
    return this.nodeEnv == 'development';
  }

  get isProduction() {
    return this.nodeEnv == 'production';
  }

  get isStaging() {
    return this.nodeEnv == 'staging';
  }

  private get(key: string, defaultValue = void 0): string {
    const value = this.nestJSSer.get(key);
    if (defaultValue === void 0 && (value === void 0 || value === '')) {
      throw new Error(key + ' environment variable does not set');
    } else if (!value) {
      return defaultValue;
    }
    return value;
  }

  private getString(key: string, defaultValue?: string): string {
    const value = this.get(key, defaultValue);
    return this.convertString(key, value);
  }

  private convertString(key: string, value: any): string {
    try {
      return String(value);
    } catch {
      throw new Error(key + ' environment variable is not a string');
    }
  }

  private getNumber(key: string, defaultValue?: number): number {
    const value = this.get(key, defaultValue);
    return this.convertNumber(key, value);
  }

  private convertNumber(key: string, value: any): number {
    try {
      return Number(value);
    } catch {
      throw new Error(key + ' environment variable is not a number');
    }
  }

  private getBoolean(key: string, defaultValue?: string): boolean {
    const value = this.get(key, defaultValue);
    return this.convertBoolean(key, value);
  }

  private convertBoolean(key: string, value: any): boolean {
    try {
      return Boolean(JSON.parse(value));
    } catch {
      throw new Error(key + ' environment variable is not a boolean');
    }
  }

  private getArray(key: string, defaultArr?: string[]): string[] {
    const arrStr = this.getString(key, defaultArr ? '' : void 0);
    const arr = arrStr
      ? arrStr?.split(',').map((item: string) => item?.trim())
      : [];
    if (defaultArr == void 0 && !arr.length) {
      throw new Error(key + ' environment variable does not set');
    }
    if (arr.length) {
      return arr;
    }
    return defaultArr;
  }

  get nodeEnv() {
    return this.getString('NODE_ENV');
  }

  get app() {
    const isEnableVersion = this.getBoolean('HTTP_VERSIONING_ENABLE', 'false');
    const version = this.getString('HTTP_VERSION', '1');
    return {
      name: this.getString('APP_NAME'),
      defaultLanguage: this.getString('APP_DEFAULT_LANGUAGE'),
      globalPrefix: '/api',
      http: {
        enable: this.getBoolean('HTTP_ENABLE'),
        host: this.getString('HTTP_HOST'),
        port: this.getNumber('HTTP_PORT'),
      },
      versioning: {
        enable: isEnableVersion,
        version: version,
        prefix: 'v',
        versionPrefix: isEnableVersion ? `v${version}` : '',
      },
      saltRounds: 10,
    };
  }

  get getMongoDB(): MongooseModuleOptions {
    return {
      uri: this.getString('MONGODB_URI'),
    };
  }

  get dbDebug(): boolean {
    return this.getBoolean('DATABASE_DEBUG');
  }

  get logger() {
    return {
      writeIntoFile: this.getBoolean('LOGGER_SYSTEM_WRITE_INTO_FILE', 'true'),
      writeIntoConsole: this.getBoolean(
        'LOGGER_SYSTEM_WRITE_INTO_CONSOLE',
        'false',
      ),
      maxFile: '30d',
      maxSize: '20M',
    };
  }

  get cors() {
    return {
      allowOrigin: '*',
      allowMethod: [
        HTTP_METHOD.GET,
        HTTP_METHOD.POST,
        HTTP_METHOD.PUT,
        HTTP_METHOD.DELETE,
      ],
      allowedHeaders: [
        'Accept',
        'Accept-Language',
        'Content-Language',
        'Content-Type',
        'Origin',
        'Authorization',
        'Access-Control-Request-Method',
        'Access-Control-Request-Headers',
        'Access-Control-Allow-Headers',
        'Access-Control-Allow-Origin',
        'Access-Control-Allow-Methods',
        'Access-Control-Allow-Credentials',
        'Access-Control-Expose-Headers',
        'Access-Control-Max-Age',
        'Referer',
        'Host',
        'language',
        'user-agent',
      ],
    };
  }

  get queueConfig() {
    return {
      host: this.getString('REDIS_HOST'),
      port: this.getNumber('REDIS_PORT'),
      username: this.getString('REDIS_USERNAME', ''),
      password: this.getString('REDIS_PASSWORD', ''),
      db: this.getNumber('REDIS_DATABASE', 0),
    };
  }

  get kxKernel() {
    return {
      host: this.getString('TX_HOST'),
      accountId: this.getString('TX_ACCOUNT_ID'),
      serviceKey: this.getString('TX_SERVICE_KEY'),
    };
  }

  get file() {
    return {
      pdf: {
        maxFile: 10,
        maxFileSize: bytes('10mb'),
      },
    };
  }
}
