import { ClientSession } from 'mongoose';
import { IPaginationOptions } from 'src/internal/pagination/interfaces';

export interface IDBFindOneOptions extends Pick<IPaginationOptions, 'sort'> {
  select?: Record<string, number> | Record<string, string>;
  populate?: boolean;
  session?: ClientSession;
  withDeleted?: boolean;
}

export type IDBOptions = Pick<
  IDBFindOneOptions,
  'session' | 'withDeleted' | 'populate'
>;

export type IDBAggregateOptions = Omit<IDBOptions, 'populate'>;

export interface IDBFindAllAggregateOptions
  extends IPaginationOptions,
    IDBAggregateOptions {}

export interface IDBGetTotalAggregateOptions extends IDBOptions {
  field?: Record<string, string> | string;
  sumField?: string;
}

export interface IDBFindAllOptions
  extends IPaginationOptions,
    Omit<IDBFindOneOptions, 'sort'> {}

export interface IDBCreateOptions
  extends Omit<IDBOptions, 'withDeleted' | 'populate'> {
  _id?: string;
}

export interface IDBExistOptions extends IDBOptions {
  excludeId?: string;
}

export type IDBSoftDeleteOptions = Pick<
  IDBFindOneOptions,
  'session' | 'populate'
>;

export type IDBCreateManyOptions = Pick<IDBFindOneOptions, 'session'>;

export type IDBSoftDeleteManyOptions = Pick<
  IDBFindOneOptions,
  'session' | 'populate'
>;

export type IDBRestoreManyOptions = Pick<
  IDBFindOneOptions,
  'session' | 'populate'
>;
