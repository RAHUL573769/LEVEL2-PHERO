/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { hashPassord, verifyPassword } from '../HelpingFoldder/hashPassword'
import { createToken } from '../helpers/jwt.helpers'
import { IUser } from '../interfaces/user.interface'
import User from '../models/user.model'
import { JwtPayload } from 'jsonwebtoken'
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
  console.log('User FindOne From Login', user)
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
  console.log('Is corrected', isCorrectPasword)
  // const token = jwt.sign(jwtPayLoad, 'tour-secret', {
  //   expiresIn: '10d',
  // })

  const token = createToken(jwtPayLoad, 'tour-secret', {
    expiresIn: '10d',
  })
  console.log('Token From Auth Services', token)
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
const changePassword = async (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  decodedToken: JwtPayload,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  payload: {
    oldPassword: string
    newPassword: string
  },
) => {
  console.log('Decoded Token From Changed Password', decodedToken)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { email, iat, exp } = decodedToken

  const user = await User.findOne({ email })
  if (!user) {
    throw new Error('User Not Found')
  }
  if (!iat) {
    throw new Error('Invalid Token')
  }
  if (user.passwordChangedAt && iat > user.passwordChangedAt.getTime() / 1000) {
    throw new Error('Old Token')
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isCorrectPassword = await verifyPassword(
    payload.oldPassword,
    user.password,
  )
  console.log('Is Password Correct', isCorrectPassword)
  const updatedUser = await User.findByIdAndUpdate(
    user._id,
    {
      password: isCorrectPassword,
      passwordChangedAt: new Date(),
    },
    {
      new: true,
    },
  )
  return updatedUser
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const forgetPassword = () => {}

export const authServices = {
  login,
  register,
  changePassword,
}
