import {
  Document,
  FilterQuery,
  Model,
  MongooseUpdateQueryOptions,
  PipelineStage,
  PopulateOptions,
  Types,
  UpdateQuery,
  UpdateWithAggregationPipeline,
} from 'mongoose';
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
  IMongooseRepository,
} from '../interfaces';

export abstract class MongooseRepositoryAbstract<T extends Document>
  implements IMongooseRepository<T>
{
  protected _repository: Model<T>;
  protected _populateOnFind?: PopulateOptions | PopulateOptions[];

  constructor(
    repository: Model<T>,
    populateOnFind?: PopulateOptions | PopulateOptions[],
  ) {
    this._repository = repository;
    this._populateOnFind = populateOnFind;
  }

  async findAll<Y = T>(
    find?: FilterQuery<T> | null,
    options?: IDBFindAllOptions,
  ): Promise<Y[] | []> {
    const findAll = this._repository.find(find);

    if (options?.withDeleted !== void 0) {
      findAll.where('deletedAt').exists(options.withDeleted);
    }
    if (options?.select) {
      findAll.select(options.select);
    }

    if (options?.limit !== void 0 && options.skip !== void 0) {
      findAll.limit(options.limit).skip(options.skip);
    }

    if (options?.sort) {
      findAll.sort(options.sort);
    }

    if (options?.populate) {
      findAll.populate(this._populateOnFind);
    }

    if (options?.session) {
      findAll.session(options.session);
    }

    return findAll.lean() as unknown as Y[] | [];
  }

  async findAllAggregate<N>(
    pipeline: PipelineStage[],
    options?: IDBFindAllAggregateOptions,
  ): Promise<N[]> {
    if (options?.withDeleted !== void 0) {
      pipeline.push({
        $match: {
          deletedAt: { $exists: options.withDeleted },
        },
      });
    }

    if (options?.limit !== void 0 && options.skip !== void 0) {
      pipeline.push({
        $skip: options.skip,
      });

      pipeline.push({
        $limit: options.limit,
      });
    }

    if (options?.sort) {
      pipeline.push({
        $sort: options.sort,
      });
    }

    const aggregate = this._repository.aggregate<N>(pipeline);

    if (options?.session) {
      aggregate.session(options.session);
    }

    return aggregate;
  }

  async findOne<Y = T>(
    find: FilterQuery<T>,
    options?: IDBFindOneOptions,
  ): Promise<Y | null> {
    const findOne = this._repository.findOne(find);

    if (options?.withDeleted !== void 0) {
      findOne.where('deletedAt').exists(options.withDeleted);
    }

    if (options?.select) {
      findOne.select(options.select);
    }

    if (options?.populate) {
      findOne.populate(this._populateOnFind);
    }

    if (options?.session) {
      findOne.session(options.session);
    }

    if (options?.sort) {
      findOne.sort(options.sort);
    }

    return findOne.lean() as unknown as Y | null;
  }

  async findOneById<Y = T>(
    _id: Types.ObjectId | string,
    options?: IDBFindOneOptions,
  ): Promise<Y> {
    const findOne = this._repository.findById(_id);

    if (options?.withDeleted !== void 0) {
      findOne.where('deletedAt').exists(options.withDeleted);
    }

    if (options?.select) {
      findOne.select(options.select);
    }

    if (options?.populate) {
      findOne.populate(this._populateOnFind);
    }

    if (options?.session) {
      findOne.session(options.session);
    }

    if (options?.sort) {
      findOne.sort(options.sort);
    }

    return findOne.lean() as unknown as Y | null;
  }

  async findOneAggregate<N>(
    pipeline: PipelineStage[],
    options?: IDBAggregateOptions,
  ): Promise<N> {
    if (options?.withDeleted !== void 0) {
      pipeline.push({
        $match: {
          deletedAt: { $exists: options.withDeleted },
        },
      });
    }

    pipeline.push({
      $limit: 1,
    });

    const aggregate = this._repository.aggregate<N>(pipeline);

    if (options?.session) {
      aggregate.session(options.session);
    }

    const findOne = await aggregate;
    return findOne && findOne.length > 0 ? findOne[0] : void 0;
  }

  async getTotal(find?: FilterQuery<T>, options?: IDBOptions): Promise<number> {
    const count = this._repository.countDocuments(find);
    if (options?.withDeleted !== void 0) {
      count.where('deletedAt').exists(options.withDeleted);
    }

    if (options?.session) {
      count.session(options.session);
    }

    if (options?.populate) {
      count.populate(this._populateOnFind);
    }

    return count;
  }
  async getTotalAggregate(
    pipeline: PipelineStage[],
    options?: IDBGetTotalAggregateOptions,
  ): Promise<number> {
    if (options?.withDeleted) {
      pipeline.push({
        $match: {
          deletedAt: { $exists: true },
        },
      });
    } else {
      pipeline.push({
        $match: {
          deletedAt: { $exists: false },
        },
      });
    }

    pipeline.push({
      $group: {
        _id: options.field ? options.field : null,
        count: {
          $sum: options.sumField ? options.sumField : 1,
        },
      },
    });

    const aggregate = this._repository.aggregate(pipeline);

    if (options?.session) {
      aggregate.session(options.session);
    }

    const count = await aggregate;
    return count && count.length > 0 ? count[0].count : 0;
  }

  async exists(
    find: FilterQuery<T>,
    options?: IDBExistOptions,
  ): Promise<boolean> {
    const exist = this._repository.exists({
      _id: {
        $nin: options.excludeId ? [options.excludeId] : [],
      },
      ...find,
    });

    if (options?.withDeleted) {
      exist.where('deletedAt').exists(true);
    } else {
      exist.where('deletedAt').exists(false);
    }

    if (options?.session) {
      exist.session(options.session);
    }

    if (options?.populate) {
      exist.populate(this._populateOnFind);
    }

    const result = await exist;

    return !!result;
  }

  async aggregate<N>(
    pipeline: FilterQuery<T>[],
    options?: IDBAggregateOptions,
  ): Promise<N[]> {
    if (options?.withDeleted) {
      pipeline.push({
        $match: {
          deletedAt: { $exists: true },
        },
      });
    } else {
      pipeline.push({
        $match: {
          deletedAt: { $exists: false },
        },
      });
    }

    const aggregate = this._repository.aggregate<N>(
      pipeline as PipelineStage[],
    );

    if (options?.session) {
      aggregate.session(options.session);
    }

    return aggregate;
  }

  async create<N>(data: N, options?: IDBCreateOptions): Promise<T> {
    const dataCreate: FilterQuery<T> = data;
    if (options?._id) {
      dataCreate._id = new Types.ObjectId(options._id);
    }

    const create = await this._repository.create([dataCreate], {
      session: options ? options.session : void 0,
    });

    return create[0];
  }

  async updateOneById<N = T>(
    _id: Types.ObjectId,
    data: N,
    options?: IDBOptions,
  ): Promise<T> {
    const update = this._repository.findByIdAndUpdate(
      _id,
      {
        $set: data,
      },
      { new: true },
    );

    if (options?.withDeleted !== void 0) {
      update.where('deletedAt').exists(options.withDeleted);
    }

    if (options?.populate) {
      update.populate(this._populateOnFind);
    }

    if (options?.session) {
      update.session(options.session);
    }

    return update;
  }

  async updateOne<N = T>(
    find: FilterQuery<T>,
    data: N,
    options?: IDBOptions & { upsert?: boolean },
  ): Promise<T> {
    const update = this._repository.findOneAndUpdate(
      find,
      {
        $set: data,
      },
      { new: true, upsert: options?.upsert },
    );

    if (options?.withDeleted !== void 0) {
      update.where('deletedAt').exists(options.withDeleted);
    }

    if (options?.populate) {
      update.populate(this._populateOnFind);
    }

    if (options?.session) {
      update.session(options.session);
    }

    return update;
  }

  public updateOneModel(
    filter?: FilterQuery<T>,
    update?: UpdateQuery<T> | UpdateWithAggregationPipeline,
    options?: MongooseUpdateQueryOptions,
  ) {
    return this._repository.updateOne(filter, update, options);
  }

  public updateManyModel(
    filter?: FilterQuery<T>,
    update?: UpdateQuery<T> | UpdateWithAggregationPipeline,
    options?: MongooseUpdateQueryOptions,
  ) {
    return this._repository.updateMany(filter, update, options);
  }

  async deleteOne(
    find: FilterQuery<T>,
    options?: IDBOptions,
  ): Promise<T | null> {
    const del = this._repository.findOneAndDelete(find, { new: true });

    if (options?.withDeleted !== void 0) {
      del.where('deletedAt').exists(options.withDeleted);
    }

    if (options?.populate) {
      del.populate(this._populateOnFind);
    }

    if (options?.session) {
      del.session(options.session);
    }

    return del;
  }

  async deleteOneById(_id: string, options?: IDBOptions): Promise<T | null> {
    const del = this._repository.findByIdAndDelete(new Types.ObjectId(_id), {
      new: true,
    });

    if (options?.withDeleted !== void 0) {
      del.where('deletedAt').exists(options.withDeleted);
    }

    if (options?.populate) {
      del.populate(this._populateOnFind);
    }

    if (options?.session) {
      del.session(options.session);
    }

    return del;
  }

  async softDeleteOneById(
    _id: string,
    options?: IDBSoftDeleteOptions,
  ): Promise<T> {
    const del = this._repository
      .findByIdAndUpdate(
        _id,
        {
          $set: { deletedAt: new Date() },
        },
        { new: true },
      )
      .where('deletedAt')
      .exists(false);

    if (options?.populate) {
      del.populate(this._populateOnFind);
    }

    if (options?.session) {
      del.session(options.session);
    }

    return del;
  }

  async softDeleteOne(
    find: FilterQuery<T>,
    options?: IDBSoftDeleteOptions,
  ): Promise<T> {
    const del = this._repository
      .findOneAndUpdate(
        find,
        {
          $set: { deletedAt: new Date() },
        },
        { new: true },
      )
      .where('deletedAt')
      .exists(false);

    if (options?.populate) {
      del.populate(this._populateOnFind);
    }

    if (options?.session) {
      del.session(options.session);
    }

    return del;
  }

  async restore(
    _id: string,
    options?: IDBSoftDeleteOptions,
  ): Promise<T | null> {
    const rest = this._repository
      .findByIdAndUpdate(
        _id,
        {
          $set: { deletedAt: void 0 },
        },
        { new: true },
      )
      .where('deletedAt')
      .exists(true);

    if (options?.populate) {
      rest.populate(this._populateOnFind);
    }

    if (options?.session) {
      rest.session(options.session);
    }

    return rest;
  }

  async createMany<N>(
    data: N[],
    options?: IDBCreateManyOptions,
  ): Promise<boolean> {
    const create = this._repository.insertMany(data, {
      session: options ? options.session : void 0,
    });

    try {
      await create;
      return true;
    } catch (err: any) {
      throw err;
    }
  }

  async deleteManyById(_id: string[], options?: IDBOptions): Promise<boolean> {
    const map: Types.ObjectId[] = _id.map((val) => new Types.ObjectId(val));

    const del = this._repository.deleteMany({
      _id: {
        $in: map,
      },
    });

    if (options?.withDeleted) {
      del.where('deletedAt').exists(true);
    } else {
      del.where('deletedAt').exists(false);
    }

    if (options?.session) {
      del.session(options.session);
    }

    if (options?.populate) {
      del.populate(this._populateOnFind);
    }

    try {
      await del;
      return true;
    } catch (err: any) {
      throw err;
    }
  }

  async deleteMany(
    find: Record<string, any>,
    options?: IDBOptions,
  ): Promise<boolean> {
    const del = this._repository.deleteMany(find);

    if (options?.withDeleted) {
      del.where('deletedAt').exists(true);
    } else {
      del.where('deletedAt').exists(false);
    }

    if (options?.session) {
      del.session(options.session);
    }

    if (options?.populate) {
      del.populate(this._populateOnFind);
    }

    try {
      await del;
      return true;
    } catch (err: any) {
      throw err;
    }
  }

  async softDeleteManyById(
    _id: string[],
    options?: IDBSoftDeleteManyOptions,
  ): Promise<boolean> {
    const map: Types.ObjectId[] = _id.map((val) => new Types.ObjectId(val));

    const softDel = this._repository
      .updateMany(
        {
          _id: {
            $in: map,
          },
        },
        {
          $set: {
            deletedAt: new Date(),
          },
        },
      )
      .where('deletedAt')
      .exists(false);

    if (options?.session) {
      softDel.session(options.session);
    }

    if (options?.populate) {
      softDel.populate(this._populateOnFind);
    }

    try {
      await softDel;
      return true;
    } catch (err: any) {
      throw err;
    }
  }

  async softDeleteMany(
    find: Record<string, any>,
    options?: IDBSoftDeleteManyOptions,
  ): Promise<boolean> {
    const softDel = this._repository
      .updateMany(find, {
        $set: {
          deletedAt: new Date(),
        },
      })
      .where('deletedAt')
      .exists(false);

    if (options?.session) {
      softDel.session(options.session);
    }

    if (options?.populate) {
      softDel.populate(this._populateOnFind);
    }

    try {
      await softDel;
      return true;
    } catch (err: any) {
      throw err;
    }
  }

  async restoreMany(
    _id: string[],
    options?: IDBRestoreManyOptions,
  ): Promise<boolean> {
    const map: Types.ObjectId[] = _id.map((val) => new Types.ObjectId(val));

    const rest = this._repository
      .updateMany(
        {
          _id: {
            $in: map,
          },
        },
        {
          $set: {
            deletedAt: void 0,
          },
        },
      )
      .where('deletedAt')
      .exists(true);

    if (options?.session) {
      rest.session(options.session);
    }

    if (options?.populate) {
      rest.populate(this._populateOnFind);
    }

    try {
      await rest;
      return true;
    } catch (err: any) {
      throw err;
    }
  }

  async updateMany<N>(
    find: Record<string, any>,
    data: N,
    options?: IDBOptions,
  ): Promise<boolean> {
    const update = this._repository.updateMany(find, {
      $set: data,
    });

    if (options?.withDeleted) {
      update.where('deletedAt').exists(true);
    } else {
      update.where('deletedAt').exists(false);
    }

    if (options?.session) {
      update.session(options.session);
    }

    if (options?.populate) {
      update.populate(this._populateOnFind);
    }

    try {
      await update;
      return true;
    } catch (err: any) {
      throw err;
    }
  }
}
