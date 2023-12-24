import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { TLogin } from './auth.interface';

const loginUser = async (payload: TLogin) => {
  console.log(payload);

  //checking if user exists
  const isUserExists = await User.findOne({ id: payload.id });
  if (!isUserExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user not Found');
  }
  //checking if the user is already deleated
  const isDeleted = isUserExists?.isDeleted;
  if (isDeleted) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is Deleted');
  }

  //checking if the user is blocked
  const userStatus = isUserExists?.status;
  if (userStatus === 'blocked') {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is Blocked');
  }

  //Aceess Granted
};

export const AuthServices = { loginUser };
