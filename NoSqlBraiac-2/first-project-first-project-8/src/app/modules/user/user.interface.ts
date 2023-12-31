/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export interface TUser {
  id: string;
  password: string;
  needsPasswordChange: boolean;
  role: 'admin' | 'student' | 'faculty';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
}

export interface UserModel extends Model<TUser> {
  // muStaticMethod(): number;

  isUserExists(id: string): Promise<TUser>;

  isUserPaswordMatched(
    plainTextPassword: string,
    hashPassword: string,
  ): Promise<boolean>;
}
