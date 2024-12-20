import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { AxiosError, AxiosResponse } from 'axios';
import { ConfigService } from 'src/internal/config/services/config.service';
import { catchError, firstValueFrom } from 'rxjs';
import { LoggerService } from 'src/internal/logger/services/logger.service';
import { TxAbstractClient } from '../abstract.client';
import { IResumeParserRequest } from './resume-parser.interface';

@Injectable()
export class TxResumeParserClient extends TxAbstractClient {
  static readonly uri = '/parser/resume';
  constructor(
    private readonly configSer: ConfigService,
    private readonly loggerSer: LoggerService,
    private readonly httpService: HttpService,
  ) {
    super(configSer.kxKernel, TxResumeParserClient.uri);
  }

  async call(data: IResumeParserRequest): Promise<AxiosResponse<any>> {
    return await firstValueFrom(
      this.httpService
        .post(this.url, data, {
          headers: {
            ...this.authHeaderKeys,
            'Content-Type': 'application/json-patch+json',
          },
        })
        .pipe(
          catchError((err: AxiosError) => {
            this.loggerSer.error(
              {
                class: TxResumeParserClient.name,
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
