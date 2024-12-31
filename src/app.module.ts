import 'src/app.polyfill';
import { Module } from '@nestjs/common';
import { InternalModule } from './internal/internal.module';
import { RouterModule } from './router/router.module';
import { SchedulerModule } from './scheduler/scheduler.module';
import { QueueModule } from './queue/queue.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
@Module({
  imports: [
    InternalModule,
    RouterModule.register(),
    SchedulerModule.forRoot(),
    QueueModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'storage'),
      serveRoot: '/storage',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
