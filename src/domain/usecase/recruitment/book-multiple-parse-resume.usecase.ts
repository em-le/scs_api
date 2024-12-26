import { Injectable } from '@nestjs/common';
import { Types } from 'mongoose';
import { ParseStatus } from 'src/infra/repository/recruitment/constants';
import { ResumeRepository } from 'src/infra/repository/recruitment/resume.repository';
import { ParserProducer } from 'src/queue/queues/parser/parser.producer';

@Injectable()
export class BookMultipleResumeParseUseCase {
  constructor(
    private readonly resumeRepo: ResumeRepository,
    private readonly parserProducer: ParserProducer,
  ) {}

  async execute(ids: Types.ObjectId[]): Promise<void> {
    const resumes = await this.resumeRepo.findAll({
      _id: { $in: ids },
      parseStatus: ParseStatus.NOT_YET,
    });
    if (!resumes || resumes.length != ids.length) {
      throw new Error('Some resumes are not found');
    }
    await Promise.all(
      ids.map((id) =>
        this.parserProducer.dispatchParseResume({ id: id.toString() }),
      ),
    );
  }
}
