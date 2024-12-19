import {
  DB_CREATED_AT_FIELD_NAME,
  DB_CREATED_BY_FIELD_NAME,
  DB_DELETED_AT_FIELD_NAME,
  DB_DELETED_BY_FIELD_NAME,
  DB_UPDATED_AT_FIELD_NAME,
  DB_UPDATED_BY_FIELD_NAME,
} from '../constants';

export interface IBaseDBAbstract<T = any> {
  _id: T;
  enabled?: boolean;
}

export interface IAuthorDBAbstract<T = any> extends IBaseDBAbstract<T> {
  [DB_CREATED_AT_FIELD_NAME]: Date;
  [DB_CREATED_BY_FIELD_NAME]?: T;
  [DB_UPDATED_AT_FIELD_NAME]?: Date;
  [DB_UPDATED_BY_FIELD_NAME]?: T;
}

export interface IDBAbstract<T = any> extends IAuthorDBAbstract<T> {
  [DB_DELETED_AT_FIELD_NAME]?: Date;
  [DB_DELETED_BY_FIELD_NAME]?: T;
}
