import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { AxiosError, AxiosResponse } from 'axios';
import { ConfigService } from 'src/internal/config/services/config.service';
import { catchError, firstValueFrom } from 'rxjs';
import { LoggerService } from 'src/internal/logger/services/logger.service';
import { TxAbstractClient } from '../abstract.client';
import { IAccountReponse } from './account.interface';

@Injectable()
export class TxAccountClient extends TxAbstractClient {
  static readonly uri = '/account';
  constructor(
    private readonly configSer: ConfigService,
    private readonly loggerSer: LoggerService,
    private readonly httpService: HttpService,
  ) {
    super(configSer.kxKernel, TxAccountClient.uri);
  }

  async call(): Promise<AxiosResponse<IAccountReponse>> {
    return await firstValueFrom(
      this.httpService
        .get(this.url, {
          headers: {
            ...this.authHeaderKeys,
            'Content-Type': 'application/json',
          },
        })
        .pipe(
          catchError((err: AxiosError) => {
            this.loggerSer.error(
              {
                class: TxAccountClient.name,
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
