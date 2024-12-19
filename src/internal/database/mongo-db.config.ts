import { Injectable } from '@nestjs/common';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';
import mongoose, { Connection } from 'mongoose';
import { ConfigService } from '../config/services/config.service';

@Injectable()
export class MongoDBConfig implements MongooseOptionsFactory {
  constructor(private readonly configSer: ConfigService) {}
  createMongooseOptions(): MongooseModuleOptions {
    const mongoDBConfig: MongooseModuleOptions = this.configSer.getMongoDB;
    if (this.configSer.isDevelopment) {
      mongoose.set('debug', this.configSer.dbDebug);
    }
    return {
      ...mongoDBConfig,
      verboseRetryLog: true,
      onConnectionCreate: (conn: Connection) => {
        console.log(`MongoDB connected with ${conn.readyState} ready state`);
        return conn;
      },
    };
  }
}
