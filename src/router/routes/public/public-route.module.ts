import { Module } from '@nestjs/common';
import { HealthController } from './heath.controller';

@Module({
  imports: [],
  controllers: [HealthController],
})
export class PublicRouteModule {}
