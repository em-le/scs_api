import { HttpException, Injectable } from '@nestjs/common';
import { ConfigService } from 'src/internal/config/services/config.service';
import { LoggerService } from 'src/internal/logger/services/logger.service';
import { TxAbstractClient, TxClientResponse } from '../abstract.client';
import {
  ResumeBimetricMatchRequest,
  StructuredBimetricMatchResponseStructuredResponseModel,
} from '../../openapi/data-contracts';

@Injectable()
export class TxResumeBimetricClient extends TxAbstractClient {
  constructor(
    private readonly configSer: ConfigService,
    private readonly loggerSer: LoggerService,
  ) {
    super(configSer.kxKernel);
  }

  async call(
    data: ResumeBimetricMatchRequest,
  ): TxClientResponse<StructuredBimetricMatchResponseStructuredResponseModel> {
    return this.scorerBimetricScoreResume(data).catch((err) => {
      this.loggerSer.error(
        {
          class: TxResumeBimetricClient.name,
          function: this.call.name,
          description: err.response?.statusText ?? '',
        },
        this.getClientErrCtx(err),
      );
      throw new HttpException(err.response?.statusText, err.response?.status);
    });
  }
}
