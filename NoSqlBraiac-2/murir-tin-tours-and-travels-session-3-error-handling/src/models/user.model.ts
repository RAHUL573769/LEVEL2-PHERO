import { Document, Query, Schema, model } from 'mongoose'
import { IUser, userRole } from '../interfaces/user.interface'

const UserRole: userRole[] = ['admin', 'user']
const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, 'Please tell us your name'],
    unique: true,
  },
  age: {
    type: Number,
    required: [true, 'Please tell us your age'],
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Please tell us your email'],
    lowercase: true,
  },
  photo: String,
  role: {
    type: String,
    enum: {
      values: UserRole,
    },
    default: 'user',
  },
  userStatus: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
})

//Pre Hook for Query Middleware
userSchema.pre(/^find/, function (this: Query<IUser, Document>, next) {
  this.find({ userStatus: { $eq: 'active' } })
  next()
})

// userSchema.pre("findOne", function (next) {
//     this.findOne({userStatus : { $eq : "active"}})
//     next()
// });

const User = model<IUser>('User', userSchema)

export default User
