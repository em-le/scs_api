import { Response } from 'express';

export interface IResponse extends Response {
  body: string;
}

export interface IPagingResponse<T extends Record<string, any>>
  extends Response {
  pagination: IPaginationMeta;
  cursor: IPaginationCursorMeta;
  data: Array<T>;
}

export interface IPaginationMeta {
  total: number;
  totalPage: number;
  currentPage: number;
  take: number;
}

export interface IPaginationCursorMeta {
  nextPage: string;
  previousPage: string;
  firstPage: string;
  lastPage: string;
}
