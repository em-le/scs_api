import {
  InjectConnection,
  InjectModel,
  Prop,
  PropOptions,
  Schema,
} from '@nestjs/mongoose';
import { SchemaOptions } from 'mongoose';
import {
  PRIMARY_CONNECTION,
  DB_CREATED_AT_FIELD_NAME,
  DB_UPDATED_AT_FIELD_NAME,
  EMAIL_REG,
} from '../constants';

export function MongooseConnection(
  connectionName: string = PRIMARY_CONNECTION,
): ParameterDecorator {
  return InjectConnection(connectionName);
}

export function MongooseModel(
  entityName: string,
  connectionName: string = PRIMARY_CONNECTION,
): ParameterDecorator {
  return InjectModel(entityName, connectionName);
}

export function MongooseEntity(
  collectionName: string,
  options?: SchemaOptions,
): ClassDecorator {
  return Schema({
    timestamps: {
      createdAt: DB_CREATED_AT_FIELD_NAME,
      updatedAt: DB_UPDATED_AT_FIELD_NAME,
    },
    ...options,
    collection: collectionName,
    versionKey: false,
  });
}
export function EmailProp(
  options: PropOptions & { required?: boolean } = { required: true },
): PropertyDecorator {
  return Prop({
    ...(options as object),
    type: String,
    validate: (value: string) => {
      const reg = new RegExp(EMAIL_REG);
      if (reg.test(value) || (!options?.required && !value)) {
        return true;
      }
      return false;
    },
  });
}
