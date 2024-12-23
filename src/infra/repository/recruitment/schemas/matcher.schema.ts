import { AuthorDBAbstractSchema } from 'src/internal/database/abstracts/schema.abstract';
import { MongooseSchema } from 'src/internal/database/decorators/database.decorator';
import { IMatcher } from '../interfaces/matcher.interface';
import { HydratedDocument } from 'mongoose';
import { SchemaFactory } from '@nestjs/mongoose';

export const MatcherCollectionName = 'matchers';
@MongooseSchema(MatcherCollectionName)
export class Matcher extends AuthorDBAbstractSchema implements IMatcher {}

export const MatcherSchema = SchemaFactory.createForClass(Matcher);
export type MatcherDocument = HydratedDocument<Matcher>;
