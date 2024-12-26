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
import {
  ResumeParser,
  ResumeParserSchema,
  ResumeParserCollectionName,
} from './schemas/resume-parser.schema';
import { JobParserRepository } from './job-parser.repository';
import { ResumeParserRepository } from './resume-parser.repository';
import {
  JobParser,
  JobParserCollectionName,
  JobParserSchema,
} from './schemas/job-parser.schema';
import { JobRepository } from './job.repository';
import { Job, JobCollectionName, JobSchema } from './schemas/job.schema';

const repositories = [
  RecruitmentRepository,
  ResumeRepository,
  ResumeParserRepository,
  JobRepository,
  JobParserRepository,
];

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
        {
          name: ResumeParser.name,
          schema: ResumeParserSchema,
          collection: ResumeParserCollectionName,
        },
        {
          name: Job.name,
          schema: JobSchema,
          collection: JobCollectionName,
        },
        {
          name: JobParser.name,
          schema: JobParserSchema,
          collection: JobParserCollectionName,
        },
      ],
      PRIMARY_CONNECTION,
    ),
  ],
  providers: repositories,
  exports: repositories,
})
export class RecruitmentRepositoryModule {}
