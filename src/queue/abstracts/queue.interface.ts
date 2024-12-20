import { Types } from 'mongoose';

export type IQueueData<T = Record<string, any>> = T & {
  queueId?: Types.ObjectId;
  jobId?: number;
};

export interface JobOptions {
  backoff?: number;
}

export interface IUpdateExecuteQueueOptions {
  failedReason?: string;
}
