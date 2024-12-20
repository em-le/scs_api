import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { AxiosError, AxiosResponse } from 'axios';
import { ConfigService } from 'src/internal/config/services/config.service';
import { catchError, firstValueFrom } from 'rxjs';
import { LoggerService } from 'src/internal/logger/services/logger.service';
import { TxAbstractClient } from '../abstract.client';
import {
  IResumeMatcherRequest,
  IResumeMatcherResponse,
} from './resume-macher.interface';

@Injectable()
export class TxResumeMatcherClient extends TxAbstractClient {
  static readonly uri = '/macher/resume';
  constructor(
    private readonly configSer: ConfigService,
    private readonly loggerSer: LoggerService,
    private readonly httpService: HttpService,
  ) {
    super(configSer.kxKernel, TxResumeMatcherClient.uri);
  }

  async call(
    data: IResumeMatcherRequest,
  ): Promise<AxiosResponse<IResumeMatcherResponse>> {
    return await firstValueFrom(
      this.httpService
        .post(this.url, data, {
          headers: {
            ...this.authHeaderKeys,
          },
        })
        .pipe(
          catchError((err: AxiosError) => {
            this.loggerSer.error(
              {
                class: TxResumeMatcherClient.name,
                function: this.call.name,
                description: err.response?.statusText ?? '',
              },
              this.getClientErrCtx(err),
            );
            throw new HttpException(
              err.response?.statusText,
              err.response?.status,
            );
          }),
        ),
    );
  }
}
