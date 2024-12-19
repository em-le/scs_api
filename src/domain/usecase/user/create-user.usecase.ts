import { Injectable } from '@nestjs/common';
import { IUserCreation } from 'src/infra/repository/user/schemas/user.interface';
import { UserRepository } from 'src/infra/repository/user/user.repository';
import { ConfigService } from 'src/internal/config/services/config.service';
import { HashHelper } from 'src/internal/helper/services/hash.helper';
import { ICreateUserUsecaseRequest } from './requests/create-user-usecase.request';

@Injectable()
export class CreateUserUseCase {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly hashHelper: HashHelper,
    private readonly configSer: ConfigService,
  ) {}

  async execute(requestObject: ICreateUserUsecaseRequest): Promise<void> {
    await this.tryToUpsertUser(requestObject);
  }

  private async tryToUpsertUser(data: IUserCreation): Promise<void> {
    try {
      const salt = this.hashHelper.randomSalt(this.configSer.app.saltRounds);
      const hashPassword = this.hashHelper.bcrypt(data.password, salt);
      await this.upsertUser({
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        password: hashPassword,
      });
    } catch (error) {
      throw new Error(error?.message);
    }
  }

  private async upsertUser(data: IUserCreation): Promise<void> {
    await this.userRepo.updateOne({ email: data.email }, data, {
      upsert: true,
    });
  }
}
