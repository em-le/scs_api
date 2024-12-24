import { Module } from '@nestjs/common';
import { HealthController } from './heath.controller';
import { RecruitmentRepositoryModule } from 'src/infra/repository/recruitment/recruitment-repository.module';

@Module({
  imports: [RecruitmentRepositoryModule],
  controllers: [HealthController],
})
export class PublicRouteModule {}
