import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { HelperModule } from './helper/helper.module';
import { LoggerModule } from './logger/logger.module';
import { RequestModule } from './request/request.module';
import { ClientModule } from './client/client.module';
import { FileModule } from './file/file.module';

@Module({
  imports: [
    ConfigModule,
    HelperModule,
    ClientModule,
    DatabaseModule,
    LoggerModule.forRoot(),
    RequestModule,
    FileModule,
  ],
  providers: [],
})
export class InternalModule {}
