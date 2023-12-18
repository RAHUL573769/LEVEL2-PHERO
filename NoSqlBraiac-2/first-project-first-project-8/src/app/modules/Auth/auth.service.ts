import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { TLoginUser } from './auth.interface';
// import bcrypt from 'bcrypt';
// import notFound from './../../middlewares/notFound';

const loginUser = async (payload: TLoginUser) => {
  //checking if user exists

  //   const isUserExist = await User.findOne({ id: payload?.id });

  const userData = await User.isUserExists(payload.id);
  if (!userData) {
    throw new AppError(httpStatus.NOT_FOUND, 'tHIS user not found');
  }

  // eslint-disable-next-line no-unused-vars
  //   const isDeleted = isUserExist?.isDeleted;

  //   if (isDeleted) {
  //     throw new AppError(httpStatus.FORBIDDEN, 'Useer is Deleted');
  //   }

  //   const userStatus = isUserExist.status;
  //   if (userStatus === 'blocked') {
  //     throw new AppError(httpStatus.FORBIDDEN, 'Useer is Blocked');
  //   }

  //checking if password is correct

  if (
    !(await User.isUserPaswordMatched(payload?.password, userData?.password))
  ) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password Not Matched');
  }
  //   const isPasswordMatched = await bcrypt.compare(
  //     payload?.password,,us
  //     isUserExist?.password,
  //   );
  //   console.log(isPasswordMatched);
  //Acces Granted

  console.log(payload);
  return {};
};

export const AuthService = {
  loginUser,
};
