import { DynamicModule, ForwardReference, Module, Type } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TaskModule } from './task/job.module';

@Module({})
export class SchedulerModule {
  static forRoot(): DynamicModule {
    const imports: (
      | DynamicModule
      | Type<any>
      | Promise<DynamicModule>
      | ForwardReference<any>
    )[] = [];
    if (process.env.SCHEDULER_ENABLE === 'true') {
      imports.push(ScheduleModule.forRoot(), TaskModule);
    }
    return {
      module: SchedulerModule,
      providers: [],
      exports: [],
      controllers: [],
      imports,
    };
  }
}
