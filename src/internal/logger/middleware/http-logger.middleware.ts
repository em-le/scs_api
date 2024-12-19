import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import * as morgan from 'morgan';
import { ConfigService } from 'src/internal/config/services/config.service';
import { IResponse } from 'src/internal/response/interfaces';

@Injectable()
export class HttpLoggerMiddleware implements NestMiddleware {
  private readonly writeIntoFile: boolean = true;
  private readonly writeIntoConsole: boolean = true;
  constructor(private readonly configSer: ConfigService) {
    this.writeIntoConsole = configSer.logger.writeIntoConsole;
    this.writeIntoFile = configSer.logger.writeIntoFile;
  }
  use(req: Request, res: Response, next: (error?: any) => void) {
    if (this.writeIntoFile || this.writeIntoConsole) {
      this.addToken();
    }
    next();
  }

  private addToken(): void {
    morgan.token('req-params', (req: Request) => JSON.stringify(req.params));
    morgan.token('req-headers', (req: Request) => JSON.stringify(req.headers));
    morgan.token('req-body', (req: Request) => JSON.stringify(req.body));
    morgan.token('res-body', (_, res: IResponse) => res.body);
  }
}
