import { Module } from '@nestjs/common';

const tasks = [];
@Module({
  imports: [],
  providers: tasks,
})
export class TaskModule {}
