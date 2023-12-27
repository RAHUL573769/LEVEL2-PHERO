/* eslint-disable no-unused-vars */
import { IUser } from '../interfaces/user.interface'
import User from '../models/user.model'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface IRegister
  extends Omit<IUser, 'userStatus' | 'role' | 'passwordChangedAt'> {}

const login = async () => {}

const register = async (payload: IRegister) => {
  const result = await User.create({
    ...payload,
    role: 'user',
    userStatus: 'active',
  })

  return result
}

export const authServices = {
  login,
  register,
}
