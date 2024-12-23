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
  Parser,
  ParserCollectionName,
  ParserSchema,
} from './schemas/parser.schema';
import {
  Matcher,
  MatcherCollectionName,
  MatcherSchema,
} from './schemas/matcher.schema';
import { MatcherRepository } from './matcher.repository';
import { ParserRepository } from './parser.repository';

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
          name: Parser.name,
          schema: ParserSchema,
          collection: ParserCollectionName,
        },
        {
          name: Matcher.name,
          schema: MatcherSchema,
          collection: MatcherCollectionName,
        },
      ],
      PRIMARY_CONNECTION,
    ),
  ],
  providers: [
    RecruitmentRepository,
    ResumeRepository,
    MatcherRepository,
    ParserRepository,
  ],
  exports: [
    RecruitmentRepository,
    ResumeRepository,
    MatcherRepository,
    ParserRepository,
  ],
})
export class RecruitmentRepositoryModule {}
