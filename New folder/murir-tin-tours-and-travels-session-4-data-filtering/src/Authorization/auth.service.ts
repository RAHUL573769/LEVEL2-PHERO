/* eslint-disable no-unused-vars */
import { IUser } from '../interfaces/user.interface'
import User from '../models/user.model'
import jwt, { JwtPayload } from 'jsonwebtoken'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface IRegister
  extends Omit<IUser, 'userStatus' | 'role' | 'passwordChangedAt'> {}

interface ILogin {
  email: string
  password: string
}
const login = async (payload: ILogin) => {
  const user = await User.findOne(payload)
  if (!user) {
    throw new Error('Invalid Creddentials')
  }
  const jwtPayLoad: JwtPayload = {
    email: user.email,
    role: user.role,
  }

  const token = jwt.sign(jwtPayLoad, 'tour-secret', {
    expiresIn: '10d',
  })

  //   return null
  return { token }
}

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
