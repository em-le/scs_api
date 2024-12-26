import { PAGINATION_AVAILABLE_SORT_TYPE } from '../constants/pagination.constant';

export type IPaginationSort<T = any> = Record<
  keyof T,
  PAGINATION_AVAILABLE_SORT_TYPE
>;

export interface IPaginationOptions {
  limit: number;
  skip: number;
  sort?: IPaginationSort;
}

export interface IPaginationFilterOptions {
  required?: boolean;
}

export interface IPaginationFilterDateOptions extends IPaginationFilterOptions {
  asEndDate?: {
    moreThanField: string;
  };
}

export interface IPaginationFilterStringOptions
  extends IPaginationFilterOptions {
  lowercase?: boolean;
}
