import { HttpException, Injectable } from '@nestjs/common';
import { ConfigService } from 'src/internal/config/services/config.service';
import { LoggerService } from 'src/internal/logger/services/logger.service';
import { TxAbstractClient } from '../abstract.client';
import { StructuredParseResumeRequest } from '../../openapi/data-contracts';

@Injectable()
export class TxResumeParserClient extends TxAbstractClient {
  constructor(
    private readonly configSer: ConfigService,
    private readonly loggerSer: LoggerService,
  ) {
    super(configSer.kxKernel);
  }

  async call(data: StructuredParseResumeRequest) {
    return this.parserParseResume(data).catch((err) => {
      this.loggerSer.error(
        {
          class: TxResumeParserClient.name,
          function: this.call.name,
          description: err.response?.statusText ?? '',
        },
        this.getClientErrCtx(err),
      );
      throw new HttpException(err.response?.statusText, err.response?.status);
    });
  }
}
