import { Injectable } from '@nestjs/common';
import {
  IJobBimetrictMatchCreation,
  IJobBimetrictMatchTarget,
} from 'src/infra/repository/recruitment/interfaces';
import { JobBimetricMatchRepository } from 'src/infra/repository/recruitment/job-bimetric-match.repository';
import { JobBimetrictMatch } from 'src/infra/repository/recruitment/schemas/job-bimetric-match.schema';
import { JobParserDocument } from 'src/infra/repository/recruitment/schemas/job-parser.schema';
import { ResumeParser } from 'src/infra/repository/recruitment/schemas/resume-parser.schema';
import { TxClientResponse } from 'src/infra/textkernel/clients/abstract.client';
import { TxJobBimetricClient } from 'src/infra/textkernel/clients/scorer/job-bimetric.client';
import {
  JobBimetricMatchRequest,
  StructuredBimetricMatchResponse,
  StructuredBimetricMatchResponseStructuredResponseModel,
  StructuredParsedJob,
  StructuredParsedResume,
} from 'src/infra/textkernel/openapi/data-contracts';
import { FileHelper } from 'src/internal/helper/services/file.helper';

@Injectable()
export class JobBimetrictService {
  constructor(
    private readonly jobBimetricMatchRepo: JobBimetricMatchRepository,
    private readonly txJobBimetricClient: TxJobBimetricClient,
    private readonly fileHelper: FileHelper,
  ) {}

  async analyzeResumes(
    jobParser: JobParserDocument,
    resumeParsers: ResumeParser[],
  ): Promise<any> {
    const sourceJob: StructuredParsedJob = {
      Id: jobParser._id.toString(),
      JobData: jobParser.JobData,
    };
    const targetResumes = resumeParsers.map(
      (resumeParser: ResumeParser): StructuredParsedResume => {
        return {
          Id: resumeParser._id.toString(),
          ResumeData: resumeParser.ResumeData,
        };
      },
    );
    const resumeIds = resumeParsers.map(
      (resumeParser: ResumeParser) => resumeParser.resume,
    );
    const resumeParserIds = resumeParsers.map(
      (resumeParser: ResumeParser) => resumeParser._id,
    );
    const jobBimetrictMatchTarget: IJobBimetrictMatchTarget = {
      jobId: jobParser.job,
      jobParserId: jobParser._id,
      resumeIds,
      resumeParserIds,
    };

    const bimitricMatchResponse = await this.executeAnalyzeRequest(
      sourceJob,
      targetResumes,
    );
    return await this.updateJobBimetricMatch(
      jobBimetrictMatchTarget,
      bimitricMatchResponse.data.Value,
    );
  }

  private async updateJobBimetricMatch(
    target: IJobBimetrictMatchTarget,
    bimetricMatch: StructuredBimetricMatchResponse,
  ): Promise<JobBimetrictMatch> {
    const { Matches, SuggestedCategoryWeights, AppliedCategoryWeights } =
      bimetricMatch;
    const data: IJobBimetrictMatchCreation = {
      ...target,
      Matches: Matches,
      SuggestedCategoryWeights: SuggestedCategoryWeights,
      AppliedCategoryWeights: AppliedCategoryWeights,
    };
    return this.jobBimetricMatchRepo.create(data);
  }

  private async executeAnalyzeRequest(
    sourceJob: StructuredParsedJob,
    targetResumes: StructuredParsedResume[],
  ): TxClientResponse<StructuredBimetricMatchResponseStructuredResponseModel> {
    const parserRequest: JobBimetricMatchRequest = {
      SourceJob: sourceJob,
      TargetResumes: targetResumes,
      Settings: {
        PositionTitlesMustHaveAnExactMatch: true,
        PositionTitlesIgnoreSingleWordVariations: true,
        NormalizeJobTitles: true,
        NormalizeJobTitlesLanguage: 'en',
      },
      PreferredCategoryWeights: {
        Education: 0.8,
        JobTitles: 0.2,
        Skills: 0.2,
        Industries: 0.5,
        Languages: 0.2,
        Certifications: 0.5,
        ExecutiveType: 0,
        ManagementLevel: 0,
        EducationHasData: true,
        JobTitlesHasData: true,
        SkillsHasData: true,
        IndustriesHasData: true,
        LanguagesHasData: true,
        CertificationsHasData: true,
        ExecutiveTypeHasData: true,
        ManagementLevelHasData: true,
      },
    };
    return this.txJobBimetricClient.call(parserRequest);
  }
}
