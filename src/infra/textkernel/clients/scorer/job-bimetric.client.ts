import { HttpException, Injectable } from '@nestjs/common';
import { ConfigService } from 'src/internal/config/services/config.service';
import { LoggerService } from 'src/internal/logger/services/logger.service';
import { TxAbstractClient, TxClientResponse } from '../abstract.client';
import {
  JobBimetricMatchRequest,
  StructuredBimetricMatchResponseStructuredResponseModel,
} from '../../openapi/data-contracts';

@Injectable()
export class TxJobBimetricClient extends TxAbstractClient {
  constructor(
    private readonly configSer: ConfigService,
    private readonly loggerSer: LoggerService,
  ) {
    super(configSer.kxKernel);
  }

  async call(
    data: JobBimetricMatchRequest,
  ): TxClientResponse<StructuredBimetricMatchResponseStructuredResponseModel> {
    return this.scorerBimetricScoreJob(data).catch((err) => {
      this.loggerSer.error(
        {
          class: TxJobBimetricClient.name,
          function: this.call.name,
          description: err.response?.statusText ?? '',
        },
        this.getClientErrCtx(err),
      );
      throw new HttpException(err.response?.statusText, err.response?.status);
    });
  }
}
