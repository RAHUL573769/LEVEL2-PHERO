/* eslint-disable no-unused-vars */
import { hashPassord, verifyPassword } from '../HelpingFoldder/hashPassword'
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
  // const user = await User.findOne(payload)
  //After adding argon3 changed to email:password.emil
  const user = await User.findOne({ email: payload.email }).select('+password')
  if (!user) {
    throw new Error('Invalid Creddentials')
  }
  console.log(user)
  const jwtPayLoad: JwtPayload = {
    email: user.email,
    role: user.role,
  }
  const password = payload.password

  const hashedPassword = await hashPassord(password)
  if (!hashPassord) {
    throw new Error('Caanot ')
  }

  const isCorrectPasword = await verifyPassword(
    hashedPassword as string,
    password,
  )
  console.log(isCorrectPasword)
  const token = jwt.sign(jwtPayLoad, 'tour-secret', {
    expiresIn: '10d',
  })

  //   return null
  return { token }
}

const register = async (payload: IRegister) => {
  const password = payload.password
  const hashedPassword = await hashPassord(password)
  // console.log('Hashed ', hashedPassword)
  const result = await User.create({
    ...payload,
    password: hashedPassword,
    role: 'user',
    userStatus: 'active',
  })

  return result
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const changePassword = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  decodedToken: JwtPayload,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  payload: {
    oldPassword: string
    newPassword: string
  },
) => {
  console.log(decodedToken)

  const { iat, exp } = decodedToken
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const forgetPassword = () => {}

export const authServices = {
  login,
  register,
  changePassword,
}
