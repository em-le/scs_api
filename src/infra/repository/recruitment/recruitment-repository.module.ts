import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { RecruitmentRepository } from './recruitment.repository';
import { PRIMARY_CONNECTION } from 'src/internal/database/constants';
import {
  RecruitmentCollectionName,
  Recruitment,
  RecruitmentSchema,
} from './schemas/recruitment.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: Recruitment.name,
          schema: RecruitmentSchema,
          collection: RecruitmentCollectionName,
        },
      ],
      PRIMARY_CONNECTION,
    ),
  ],
  providers: [RecruitmentRepository],
  exports: [RecruitmentRepository],
})
export class RecruitmentRepositoryModule {}
