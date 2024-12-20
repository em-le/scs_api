import { Module } from '@nestjs/common';
import { HealthController } from './heath.controller';
import { TextKernelModule } from 'src/infra/textkernel/textkernel.module';

@Module({
  imports: [TextKernelModule],
  controllers: [HealthController],
})
export class PublicRouteModule {}
