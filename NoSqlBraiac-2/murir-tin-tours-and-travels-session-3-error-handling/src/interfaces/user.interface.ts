export type userRole = 'user' | 'admin'
export type status = 'active' | 'inactive'

export type ITags = {
  name: string
}
interface IUser {
  name: string
  age: number
  email: string
  photo: string
  role: userRole
  userStatus: status
  // tags: ITags[]
}

export { IUser }
