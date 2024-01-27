import { IUser } from '../interfaces/user.interface'

export interface IAuth
  extends Omit<IUser, 'userStatus' | 'role' | 'passwordChangedAt'> {}
