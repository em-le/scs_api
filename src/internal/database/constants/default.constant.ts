import { Types } from 'mongoose';
import * as crypto from 'crypto';

export const DefaultObjectId = () => new Types.ObjectId();
export const DefaultUUID = crypto.randomUUID();
