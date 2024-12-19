import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import * as cors from 'cors';
import { ConfigService } from 'src/internal/config/services/config.service';

@Injectable()
export class CorsMiddleware implements NestMiddleware {
  private readonly corsConfig;

  constructor(private readonly configSer: ConfigService) {
    this.corsConfig = configSer.cors;
  }
  use(req: Request, res: Response, next: NextFunction) {
    const { allowOrigin, allowMethod, allowHeader } = this.corsConfig;
    const options = {
      origin: allowOrigin,
      methods: allowMethod,
      allowedHeaders: allowHeader,
      preflightContinue: false,
      credentials: true,
      optionsSuccessStatus: HttpStatus.NO_CONTENT,
    };
    cors(options)(req, res, next);
  }
}
