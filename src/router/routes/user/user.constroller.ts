import { Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UserUseCase } from 'src/domain/user/user.usecase';

@Controller()
export class UserController {
  constructor(private readonly userUsecase: UserUseCase) {}
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(): Promise<void> {
    this.userUsecase.create();
  }
}
