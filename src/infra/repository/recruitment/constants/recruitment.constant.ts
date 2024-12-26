export enum StorageType {
  LOCAL = 'local',
  GCP_BUCKET = 'bucket',
}

export enum ResumeFormat {
  PDF = 'PDF',
  DOC = 'DOC',
}

export enum ParseStatus {
  NOT_YET = 'not-yet',
  PARSING = 'parsing',
  PARSED = 'parsed',
  FAILED = 'failed',
}
