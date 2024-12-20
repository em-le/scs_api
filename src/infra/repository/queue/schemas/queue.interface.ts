import { QUEUE_SERVICE_TYPE, QUEUE_STATUS } from './queue.constant';

export interface IQueue {
  jobId: number | null;
  serviceType: QUEUE_SERVICE_TYPE;
  status: QUEUE_STATUS;
  data: string;
  failedReason: string | null;
}
