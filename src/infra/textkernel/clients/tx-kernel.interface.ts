export interface ITXKernelBaseConfig {
  host: string;
  accountId: string;
  serviceKey: string;
}

export interface CustomerDetails {
  AccountId: string;
  Name: string;
  IPAddress: string;
  Region: string;
  CreditsRemaining: number;
  CreditsUsed: number;
  ExpirationDate: string;
  MaximumConcurrentRequests: number;
}

export interface StuctureReponseInfoModel {
  Code: string;
  Message: string;
  TransactionId: string;
  EngineVersion: string;
  ApiVersion: string;
  TotalElapsedMilliseconds: number;
  TransactionCost: number;
  CustomerDetails: CustomerDetails;
}

export interface ResponseInfoModel {
  Code: string;
  Message: string;
}
