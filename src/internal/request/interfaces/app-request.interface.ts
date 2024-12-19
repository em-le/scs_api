import { Request } from 'express';
import { IResult as UserAgent } from 'ua-parser-js';

export interface IRequest extends Request {
  userAgent: UserAgent;
  user?: Record<string, any>;
  __class: string;
  __function: string;
}

export interface IWrapperAppRequest {
  req: IRequest;
}
