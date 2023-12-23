import { IUser } from '../interfaces/user.interface'
import User from '../models/user.model'
import jwt from 'jsonwebtoken'

type JwtPayload = {
  email: string
  role: string
}
interface IRegister
  extends Omit<
    IUser,
    'userStatus' | 'role' | 'password' | 'passwordChangedAt'
  > {
  myName: string
  yourName: string
}

const register = async (payload: IRegister) => {
  const result = await User.create({
    ...payload,
    userStatus: 'active',
    role: 'user',
  })

  return result
}

interface ILogin {
  email: string
  password: string
}

const login = async (payload: ILogin) => {
  const user = await User.findOne(payload)
  //  npm install --save @types/jsonwebtoken

  if (!user) {
    throw new Error('Invalid Credentials')
  }

  //jwt 3 parts
  //header payload signature
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const jwtPayload: JwtPayload = {
    email: user.email,
    role: user.role,
  }
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  //token creation
  const token = jwt.sign(jwtPayload, 'jwt-secret', {
    expiresIn: '1hr',
  })
  return { token }
}

export const authServices = {
  register,
  login,
}
