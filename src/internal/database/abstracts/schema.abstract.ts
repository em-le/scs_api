import { Prop } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import {
  DB_CREATED_BY_FIELD_NAME,
  DB_CREATED_AT_FIELD_NAME,
  DB_UPDATED_BY_FIELD_NAME,
  DB_UPDATED_AT_FIELD_NAME,
  DB_DELETED_AT_FIELD_NAME,
  DB_DELETED_BY_FIELD_NAME,
  AUTHOR_SCHEMA,
  DefaultObjectId,
} from '../constants';
import { IAuthorDBAbstract, IBaseDBAbstract, IDBAbstract } from '../interfaces';

export abstract class BaseDBAbstractSchema
  implements IBaseDBAbstract<Types.ObjectId>
{
  @Prop({
    type: Types.ObjectId,
    default: DefaultObjectId,
  })
  _id: Types.ObjectId;

  @Prop({
    type: Boolean,
    required: false,
    default: true,
  })
  enabled?: boolean;
}

export abstract class AuthorDBAbstractSchema
  extends BaseDBAbstractSchema
  implements IAuthorDBAbstract<Types.ObjectId>
{
  @Prop({
    type: Date,
    required: false,
    default: Date.now(),
  })
  [DB_CREATED_AT_FIELD_NAME]: Date;

  @Prop({
    type: Types.ObjectId,
    ref: AUTHOR_SCHEMA,
    required: false,
    default: null,
  })
  [DB_CREATED_BY_FIELD_NAME]: Types.ObjectId;

  @Prop({
    type: Date,
    required: false,
    default: null,
  })
  [DB_UPDATED_AT_FIELD_NAME]: Date;

  @Prop({
    type: Types.ObjectId,
    ref: AUTHOR_SCHEMA,
    required: false,
    default: null,
  })
  [DB_UPDATED_BY_FIELD_NAME]: Types.ObjectId;
}

export abstract class DBAbstractSchema
  extends AuthorDBAbstractSchema
  implements IDBAbstract<Types.ObjectId>
{
  @Prop({
    type: Date,
    required: false,
    default: null,
  })
  [DB_DELETED_AT_FIELD_NAME]?: Date;

  @Prop({
    type: Types.ObjectId,
    ref: AUTHOR_SCHEMA,
    required: false,
    default: null,
  })
  [DB_DELETED_BY_FIELD_NAME]?: Types.ObjectId;
}
