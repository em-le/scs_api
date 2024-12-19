import { StringField, EmailField } from 'src/internal/request/decorators';

export class CreateUserDto {
  @StringField()
  firstName: string;

  @StringField()
  lastName: string;

  @EmailField()
  email: string;

  @StringField()
  password: string;
}
