// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { compact as _compact, map as _map } from 'lodash';
import { Types } from 'mongoose';
import { ObjectId } from 'mongodb';

declare global {
  interface String {
    _Like: () => RegExp | string;
    _ObjectId: () => Types.ObjectId | null;
  }
}

String.prototype._Like = function () {
  return this ? new RegExp(this.replace('+', '\\+').trim(), 'i') : '';
};
String.prototype._ObjectId = function () {
  if (!ObjectId.isValid(this)) {
    throw new Error('Invalid Object Id');
  }
  return new Types.ObjectId(this);
};
