import { PAGINATION_AVAILABLE_SORT_TYPE } from '../constants';
import { IPaginationMeta } from 'src/internal/response/interfaces';
import { FilterQuery } from 'mongoose';
import { IDBFindAllOptions } from 'src/internal/database/interfaces';

export interface IPagingParam<T = string> {
  take?: number;
  skip?: number;
  orderBy?: T;
  orderRirection?: PAGINATION_AVAILABLE_SORT_TYPE;
}
export type IPaginationOrder = Record<string, PAGINATION_AVAILABLE_SORT_TYPE>;

export interface IPagingReturn<T> {
  pagination: IPaginationMeta;
  data: T[];
}

export interface IFilterQueryOption<T = any> {
  find: FilterQuery<T>;
  options: IDBFindAllOptions;
}
