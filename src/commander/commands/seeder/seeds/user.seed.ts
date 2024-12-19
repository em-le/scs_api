import mongoose from 'mongoose';
import { CommandRunner, SubCommand, Option } from 'nest-commander';
import { UserRepository } from 'src/domain/user/repositories/user.repository';
import { IUserCreation } from 'src/domain/user/schemas/interfaces/user.interface';
import { ConfigService } from 'src/internal/config/services/config.service';
import { HashHelper } from 'src/internal/helper/services/hash.helper';

interface Opstions {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

@SubCommand({
  name: 'users',
  description: 'User seeder',
  options: { isDefault: true },
})
export class UserSeed extends CommandRunner {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly hashHelper: HashHelper,
    private readonly configSer: ConfigService,
  ) {
    super();
  }

  @Option({
    flags: '-e, --email <email>',
    required: true,
  })
  parseEmail(value: string) {
    return value;
  }

  @Option({
    flags: '-f, --firstName <firstName>',
    required: true,
  })
  parseFirstName(value: string) {
    return value;
  }

  @Option({
    flags: '-l, --lastName <lastName>',
    required: true,
  })
  parseLastName(value: string) {
    return value;
  }

  @Option({
    flags: '-p, --password <password>',
    required: true,
  })
  parsePassword(value: string) {
    return value;
  }

  async run(
    passedParams: string[], // eslint-disable-line
    options: Opstions,
  ): Promise<void> {
    this.tryToUpsertUser(options);
  }

  private async tryToUpsertUser(options: Opstions): Promise<void> {
    // try {
    console.log(mongoose.connection.readyState);
    await this.upsertUser(options);
    // } catch (error) {
    //   throw new Error(error.message);
    // }
  }

  private async upsertUser(options: Opstions): Promise<void> {
    const salt = this.hashHelper.randomSalt(this.configSer.app.saltRounds);
    const passwordHash = this.hashHelper.bcrypt(options.password, salt);

    const userCreation: IUserCreation = {
      email: options.email,
      firstName: options.firstName,
      lastName: options.lastName,
      password: passwordHash,
    };
    await this.userRepo.updateOne({ email: userCreation.email }, userCreation, {
      upsert: true,
    });
  }
}
