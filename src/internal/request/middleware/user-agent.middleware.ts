import { ForbiddenException, Injectable, NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { UAParser } from 'ua-parser-js';
import { IRequest } from '../interfaces/app-request.interface';

@Injectable()
export class UserAgentMiddleware implements NestMiddleware {
  use(req: IRequest, res: Response, next: NextFunction) {
    const userAgent = req.headers['user-agent'];
    const parser = new UAParser();
    if (!userAgent) {
      throw new ForbiddenException({
        message: 'http.clientError.forbidden',
      });
    }
    req.userAgent = parser.setUA(userAgent).getResult();
    next();
  }
}
