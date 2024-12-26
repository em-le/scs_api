import { IPaginationCursorMeta, IPaginationMeta } from '../interfaces';

export class PagingResponseSerialization<T extends Record<string, any>> {
  cursor: IPaginationCursorMeta;
  pagination: IPaginationMeta;
  data: T[];
}
