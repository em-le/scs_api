import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ResumeParserRepository } from 'src/infra/repository/recruitment/resume-parser.repository';
import * as fs from 'fs';
import * as path from 'path';
import { ResumeParsingTransaction } from 'src/infra/textkernel/openapi/data-contracts';

@Controller({
  path: 'health',
})
export class HealthController {
  constructor(private readonly resumeParserRepo: ResumeParserRepository) {}
  @HttpCode(HttpStatus.OK)
  @Get('/')
  async check(): Promise<any> {
    const filePath = path.join(
      __dirname,
      '..',
      '..',
      '..',
      'samples',
      'resume-parser.json',
    );
    const jsonData = fs.readFileSync(filePath, 'utf-8');

    const resumeParsingTransaction: ResumeParsingTransaction =
      JSON.parse(jsonData);
    this.resumeParserRepo.create(resumeParsingTransaction.ResumeData);
  }
}
