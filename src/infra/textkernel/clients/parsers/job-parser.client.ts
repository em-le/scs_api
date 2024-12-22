import { HttpException, Injectable } from '@nestjs/common';
import { ConfigService } from 'src/internal/config/services/config.service';
import { LoggerService } from 'src/internal/logger/services/logger.service';
import { TxAbstractClient } from '../abstract.client';
import { StructuredParseJobOrderRequest } from '../../openapi/data-contracts';

@Injectable()
export class TxJobParserClient extends TxAbstractClient {
  constructor(
    private readonly configSer: ConfigService,
    private readonly loggerSer: LoggerService,
  ) {
    super(configSer.kxKernel);
  }

  async call(data: StructuredParseJobOrderRequest) {
    return this.parserParseJobOrder(data).catch((err) => {
      this.loggerSer.error(
        {
          class: TxJobParserClient.name,
          function: this.call.name,
          description: err.response?.statusText ?? '',
        },
        this.getClientErrCtx(err),
      );
      throw new HttpException(err.response?.statusText, err.response?.status);
    });
  }
}
