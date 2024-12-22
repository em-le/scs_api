import { Module } from '@nestjs/common';
import { RecruitmentController } from './recruitment.constroller';
import { RecruitmentUsecaseModule } from 'src/domain/usecase/recruitment/recruitment-usecase.module';

@Module({
  imports: [RecruitmentUsecaseModule],
  controllers: [RecruitmentController],
})
export class RecruitmentRouteModule {}
