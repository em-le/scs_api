import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as os from 'os';
import { ConfigService } from './internal/config/services/config.service';
import { VersioningType } from '@nestjs/common';
import * as bodyParser from 'body-parser';
import { RequestMethod, VersioningType } from '@nestjs/common';

process.env.UV_THREADPOOL_SIZE = os.cpus().length.toString();
declare const module: any;

async function bootstrap() {
  const app: NestApplication = await NestFactory.create(AppModule, {
    cors: true,
  });
  const apiConfigSer: ConfigService = app.get(ConfigService);
  const appConfig = apiConfigSer.app;
  const versionPrefix = appConfig.versioning.enable
    ? `${appConfig.versioning.prefix}${appConfig.versioning.version}`
    : '';
  app.setGlobalPrefix(appConfig.globalPrefix, {
    exclude: [
      {
        path: `${versionPrefix}/publish/resume/:short_link`,
        method: RequestMethod.GET,
      },
    ],
  });
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  if (appConfig.versioning.enable) {
    app.enableVersioning({
      type: VersioningType.URI,
      prefix: appConfig.versioning.prefix,
      defaultVersion: appConfig.versioning.version,
    });
  }
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  await app.listen(appConfig.http.port);
}
bootstrap();
