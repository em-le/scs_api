import { HttpResponse } from '../openapi/http-client';
import { V10 } from '../openapi/V10';
import { ITXKernelBaseConfig } from './tx-kernel.interface';

export type TxClientResponse<T = any, E = any> = Promise<HttpResponse<T, E>>;
export class TxAbstractClient extends V10 {
  protected authHeaderKeys: Record<string, string>;

  constructor(baseConfig: ITXKernelBaseConfig) {
    const { host, accountId, serviceKey } = baseConfig;
    super({
      baseUrl: host,
      baseApiParams: {
        headers: {
          'Tx-AccountId': accountId,
          'Tx-ServiceKey': serviceKey,
        },
      },
    });
  }

  protected getClientErrCtx(err): any {
    const { url, headers, data } = err;
    return {
      request: {
        url,
        headers,
        data,
      },
      response: {
        status: err.status,
        statusText: err.statusText,
        data: err.data,
      },
    };
  }
}
