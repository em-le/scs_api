import { Document, FilterQuery, PipelineStage, Types } from 'mongoose';
import {
  IDBAggregateOptions,
  IDBCreateManyOptions,
  IDBCreateOptions,
  IDBExistOptions,
  IDBFindAllAggregateOptions,
  IDBFindAllOptions,
  IDBFindOneOptions,
  IDBGetTotalAggregateOptions,
  IDBOptions,
  IDBRestoreManyOptions,
  IDBSoftDeleteManyOptions,
  IDBSoftDeleteOptions,
} from './options.interface';

export interface IMongooseRepository<T extends Document> {
  findAll<Y = T>(
    find?: FilterQuery<T>,
    options?: IDBFindAllOptions,
  ): Promise<Y[]>;

  findAllAggregate<N>(
    pipeline: PipelineStage[],
    options?: IDBFindAllAggregateOptions,
  ): Promise<N[]>;

  findOne<Y = T>(find: FilterQuery<T>, options?: IDBFindOneOptions): Promise<Y>;

  findOneById<Y = T>(
    _id: Types.ObjectId,
    options?: IDBFindOneOptions,
  ): Promise<Y>;

  findOneAggregate<N>(
    pipeline: PipelineStage[],
    options?: IDBAggregateOptions,
  ): Promise<N[]>;

  getTotal(find?: FilterQuery<T>, options?: IDBOptions): Promise<number>;

  getTotalAggregate(
    pipeline: PipelineStage[],
    options?: IDBGetTotalAggregateOptions,
  ): Promise<number>;

  exists(find: FilterQuery<T>, options?: IDBExistOptions): Promise<boolean>;

  aggregate<N>(
    pipeline: FilterQuery<T>[],
    options?: IDBAggregateOptions,
  ): Promise<N[]>;

  create<N>(data: N, options?: IDBCreateOptions): Promise<T>;

  updateOneById<N>(
    _id: Types.ObjectId,
    data: N,
    options?: IDBOptions,
  ): Promise<T>;

  updateOne<N>(find: FilterQuery<T>, data: N, options?: IDBOptions): Promise<T>;

  deleteOne(find: FilterQuery<T>, options?: IDBOptions): Promise<T>;

  deleteOneById(_id: string, options?: IDBOptions): Promise<T>;

  softDeleteOneById(_id: string, options?: IDBSoftDeleteOptions): Promise<T>;

  softDeleteOne(
    find: FilterQuery<T>,
    options?: IDBSoftDeleteOptions,
  ): Promise<T>;

  restore(_id: string, options?: IDBSoftDeleteOptions): Promise<T>;

  createMany<N>(data: N[], options?: IDBCreateManyOptions): Promise<boolean>;

  deleteManyById(
    _id: string[],
    options?: IDBSoftDeleteOptions,
  ): Promise<boolean>;

  deleteMany(
    find: FilterQuery<T>,
    options?: IDBSoftDeleteOptions,
  ): Promise<boolean>;

  softDeleteManyById(
    _id: string[],
    options?: IDBSoftDeleteManyOptions,
  ): Promise<boolean>;

  softDeleteMany(
    find: FilterQuery<T>,
    options?: IDBSoftDeleteManyOptions,
  ): Promise<boolean>;

  restoreMany(_id: string[], options?: IDBRestoreManyOptions): Promise<boolean>;

  updateMany<N>(
    find: FilterQuery<T>,
    data: N,
    options?: IDBOptions,
  ): Promise<boolean>;
}
