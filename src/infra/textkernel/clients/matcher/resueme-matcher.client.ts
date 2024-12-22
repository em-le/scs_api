import { HttpException, Injectable } from '@nestjs/common';
import { ConfigService } from 'src/internal/config/services/config.service';
import { LoggerService } from 'src/internal/logger/services/logger.service';
import { TxAbstractClient } from '../abstract.client';
import { MatchResumeRequest } from '../../openapi/data-contracts';

@Injectable()
export class TxResumeMatcherClient extends TxAbstractClient {
  constructor(
    private readonly configSer: ConfigService,
    private readonly loggerSer: LoggerService,
  ) {
    super(configSer.kxKernel);
  }

  async call(data: MatchResumeRequest) {
    return this.matcherResume(data).catch((err) => {
      this.loggerSer.error(
        {
          class: TxResumeMatcherClient.name,
          function: this.call.name,
          description: err.response?.statusText ?? '',
        },
        this.getClientErrCtx(err),
      );
      throw new HttpException(err.response?.statusText, err.response?.status);
    });
  }
}
