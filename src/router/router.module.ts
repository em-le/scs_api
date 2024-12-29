import { DynamicModule, Module } from '@nestjs/common';
import { RouterModule as NestJSRouterModule } from '@nestjs/core';
import { PublicRouteModule } from './routes/public/public-route.module';
import { ResumeRouteModule } from './routes/resume/resume-route.module';
import { JobRouteModule } from './routes/job/job-route.module';

@Module({})
export class RouterModule {
  static register(): DynamicModule {
    if (process.env.HTTP_ENABLE) {
      return {
        module: RouterModule,
        imports: [
          PublicRouteModule,
          ResumeRouteModule,
          JobRouteModule,
          NestJSRouterModule.register([
            {
              module: PublicRouteModule,
              path: '',
            },
            {
              module: ResumeRouteModule,
              path: 'resumes',
            },
            {
              module: JobRouteModule,
              path: 'jobs',
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
