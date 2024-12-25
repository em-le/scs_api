import { Injectable } from '@nestjs/common';
import { Types } from 'mongoose';
import { ResumeParseStatus } from 'src/infra/repository/recruitment/constants';
import { ResumeRepository } from 'src/infra/repository/recruitment/resume.repository';
import { ParserProducer } from 'src/queue/queues/parser/parser.producer';

@Injectable()
export class BookResumeParseUseCase {
  constructor(
    private readonly resumeRepo: ResumeRepository,
    private readonly parserProducer: ParserProducer,
  ) {}

  async execute(id: Types.ObjectId): Promise<void> {
    const isExists = await this.resumeRepo.exists({
      _id: id,
      parseStatus: ResumeParseStatus.NOT_YET,
    });
    if (!isExists) {
      throw new Error('The resume is not found');
    }
    return this.parserProducer.dispatchParseResume({ id: id.toString() });
  }
}
