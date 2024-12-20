import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';
import * as http from 'http';
import * as https from 'https';

@Global()
@Module({
  imports: [
    HttpModule.register({
      httpAgent: new http.Agent({ keepAlive: true }),
      httpsAgent: new https.Agent({ keepAlive: true }),
    }),
  ],
  exports: [HttpModule],
})
export class ClientModule {}
