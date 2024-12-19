import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoDBConfig } from './mongo-db.config';
import { PRIMARY_CONNECTION } from './constants';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      connectionName: PRIMARY_CONNECTION,
      useClass: MongoDBConfig,
    }),
  ],
  providers: [],
  exports: [],
})
export class DatabaseModule {}
