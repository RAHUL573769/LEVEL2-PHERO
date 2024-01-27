/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import config from '../config'
import User from '../models/user.model'
import { IAuth, ILogin } from './auth.interface'
import { JwtPayload } from 'jsonwebtoken'
import jwt from 'jsonwebtoken'

const doRegister = async (data: IAuth) => {
  // eslint-disable-next-line no-unused-vars
  const result = await User.create({
    ...data,
    userStatus: 'active',
    role: 'user',
  })
  return result
}

// eslint-disable-next-line no-unused-vars
const doLogin = async (data: ILogin) => {
  const user = await User.findOne(data)
  if (!user) {
    throw new Error('Invalid Credentials')
  }

  const payLoad: JwtPayload = {
    email: user.email,
    role: user.role,
  }

  const token = jwt.sign(payLoad, config.jwt_secret, {
    expiresIn: config.jwt_expires_in,
  })
  // console.log(token)
  return token
}

export const authServices = {
  doRegister,
  doLogin,
}
