import { ITXKernelBaseConfig } from './tx-kernel.interface';
import { AxiosError } from 'axios';

export class TxAbstractClient {
  protected authHeaderKeys: Record<string, string>;
  protected url: string;
  private readonly version = 'v10';

  constructor(baseConfig: ITXKernelBaseConfig, uri: string) {
    this.setAuthHeader(baseConfig);
    this.setUrl(baseConfig.host, uri);
  }

  protected getClientErrCtx(err: AxiosError): any {
    const { url, method, headers, data } = err.config;
    const response = err.response;
    return {
      request: {
        url,
        method,
        headers,
        data,
      },
      response: {
        status: response.status,
        statusText: response.statusText,
        data: response.data,
      },
    };
  }

  private setAuthHeader(baseConfig: ITXKernelBaseConfig) {
    const { accountId, serviceKey } = baseConfig;
    this.authHeaderKeys = {
      'Tx-AccountId': accountId,
      'Tx-ServiceKey': serviceKey,
    };
  }

  private setUrl(host: string, uri: string) {
    this.url = `${host}\\${this.version}\\${uri}`;
  }
}
