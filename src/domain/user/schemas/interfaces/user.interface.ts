export interface IUserCreation {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface IUser extends IUserCreation {
  lastLogin?: Date;
}
