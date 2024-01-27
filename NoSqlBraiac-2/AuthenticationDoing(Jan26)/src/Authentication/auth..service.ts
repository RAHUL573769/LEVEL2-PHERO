/* eslint-disable @typescript-eslint/no-unused-vars */
import User from '../models/user.model'
import { IAuth } from './auth.interface'

const doRegister = async (data: IAuth) => {
  // eslint-disable-next-line no-unused-vars
  const result = await User.create({
    ...data,
    userStatus: 'active',
    role: 'user',
  })
  return result
}
type ILogin = {
  email: string
  password: string
}
// eslint-disable-next-line no-unused-vars
const doLogin = async (data: ILogin) => {
  const result = await User.findOne(data)
  if (!result) {
    throw new Error('Invalid Credentials')
  }
  return null
}

export const authServices = {
  doRegister,
  doLogin,
}
