import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos';
import { CreateUserUseCase } from 'src/domain/usecase/user/create-user.usecase';

@Controller()
export class UserController {
  constructor(private readonly createUserUsecase: CreateUserUseCase) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<void> {
    await this.createUserUsecase.execute(createUserDto);
  }
}
