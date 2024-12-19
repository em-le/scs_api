import { DynamicModule, Module } from '@nestjs/common';
import { RouterModule as NestJSRouterModule } from '@nestjs/core';
import { PublicRouterModule } from './routes/public/public-route.module';

@Module({})
export class RouterModule {
  static register(): DynamicModule {
    if (process.env.HTTP_ENABLE) {
      return {
        module: RouterModule,
        imports: [
          PublicRouterModule,
          NestJSRouterModule.register([
            {
              module: PublicRouterModule,
              path: '',
            },
          ]),
        ],
      };
    }
    return {
      module: RouterModule,
      imports: [],
    };
  }
}
