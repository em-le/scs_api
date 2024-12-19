import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { HelperModule } from './helper/helper.module';
import { LoggerModule } from './logger/logger.module';
import { RequestModule } from './request/request.module';

@Module({
  imports: [
    ConfigModule,
    HelperModule,
    DatabaseModule,
    LoggerModule.forRoot(),
    RequestModule,
  ],
  providers: [],
})
export class InternalModule {}
