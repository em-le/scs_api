export const QUEUE_TABLE_NAME = 'queues';

export enum QUEUE_SERVICE_TYPE {
  HEALTH_CHECK = 'heath',
  PARSER = 'parser',
}

export enum QUEUE_STATUS {
  DISPATCH = 'dispatch',
  EXECUTED = 'executed',
}
