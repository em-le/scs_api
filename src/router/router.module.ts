import { DynamicModule, Module } from '@nestjs/common';
import { RouterModule as NestJSRouterModule } from '@nestjs/core';
import { PublicRouteModule } from './routes/public/public-route.module';
import { UserRouteModule } from './routes/user/user-route.module';
import { ParseModule } from './routes/parse/parse.module';

@Module({})
export class RouterModule {
  static register(): DynamicModule {
    if (process.env.HTTP_ENABLE) {
      return {
        module: RouterModule,
        imports: [
          PublicRouteModule,
          UserRouteModule,
          ParseModule,
          NestJSRouterModule.register([
            {
              module: PublicRouteModule,
              path: '',
            },
            {
              module: UserRouteModule,
              path: 'users',
            },
            {
              module: ParseModule,
              path: 'parse',
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
