import { HttpException, Injectable } from '@nestjs/common';
import { ConfigService } from 'src/internal/config/services/config.service';
import { LoggerService } from 'src/internal/logger/services/logger.service';
import { TxAbstractClient, TxClientResponse } from '../abstract.client';
import { StructuredMatchResponseStructuredResponseModel } from '../../openapi/data-contracts';

@Injectable()
export class TxAccountClient extends TxAbstractClient {
  constructor(
    private readonly configSer: ConfigService,
    private readonly loggerSer: LoggerService,
  ) {
    super(configSer.kxKernel);
  }

  async call(): TxClientResponse<StructuredMatchResponseStructuredResponseModel> {
    return this.accountGet().catch((err) => {
      this.loggerSer.error(
        {
          class: TxAccountClient.name,
          function: this.call.name,
          description: err.response?.statusText ?? '',
        },
        this.getClientErrCtx(err),
      );
      throw new HttpException(err.response?.statusText, err.response?.status);
    });
  }
}
