import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { RecruitmentRepository } from './recruitment.repository';
import { PRIMARY_CONNECTION } from 'src/internal/database/constants';
import {
  RecruitmentCollectionName,
  Recruitment,
  RecruitmentSchema,
} from './schemas/recruitment.schema';
import { ResumeRepository } from './resume.repository';
import {
  Resume,
  ResumeCollectionName,
  ResumeSchema,
} from './schemas/resume.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: Recruitment.name,
          schema: RecruitmentSchema,
          collection: RecruitmentCollectionName,
        },
        {
          name: Resume.name,
          schema: ResumeSchema,
          collection: ResumeCollectionName,
        },
      ],
      PRIMARY_CONNECTION,
    ),
  ],
  providers: [RecruitmentRepository, ResumeRepository],
  exports: [RecruitmentRepository, ResumeRepository],
})
export class RecruitmentRepositoryModule {}
