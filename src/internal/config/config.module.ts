import { Global, Module } from '@nestjs/common';
import { ConfigModule as NestJSConfig } from '@nestjs/config';
import { ConfigService } from './services/config.service';

@Global()
@Module({
  imports: [
    NestJSConfig.forRoot({
      isGlobal: true,
      cache: false,
      envFilePath: ['.env'],
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
