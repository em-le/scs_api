import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateRecruitmentUseCase } from 'src/domain/usecase/recruitment/create-recruitment.usecase';
import {
  CreateRecruitmentDto,
  UpdateRecruitmentDto,
} from './dtos/recruiment.dto';
import { RecruitmentSerialization } from './serializations/recruitment.serialization';
import { GetRecruitmentUseCase } from 'src/domain/usecase/recruitment/get-recruitment.usecase';
import { UpdateRecruitmentUseCase } from 'src/domain/usecase/recruitment/update-recruitment.usecase';

@Controller()
export class RecruitmentController {
  constructor(
    private readonly getRecruitmentUseCase: GetRecruitmentUseCase,
    private readonly createRecruitmentUseCase: CreateRecruitmentUseCase,
    private readonly updateRecruitmentUseCase: UpdateRecruitmentUseCase,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  async get(@Param('id') id: string): Promise<RecruitmentSerialization> {
    return this.getRecruitmentUseCase.execute(id._ObjectId());
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(
    @Body() data: CreateRecruitmentDto,
  ): Promise<RecruitmentSerialization> {
    return await this.createRecruitmentUseCase.execute(data);
  }

  @HttpCode(HttpStatus.OK)
  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateRecruitmentDto,
  ): Promise<RecruitmentSerialization> {
    return await this.updateRecruitmentUseCase.execute(id._ObjectId(), data);
  }
}
