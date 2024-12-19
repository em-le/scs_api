import { CommandRunner, SubCommand, Option } from 'nest-commander';
import { CreateUserUseCase } from 'src/domain/usecase/user/create-user.usecase';

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
  constructor(private readonly createUserUsecase: CreateUserUseCase) {
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
    this.createUserUsecase.execute(options);
  }
}
