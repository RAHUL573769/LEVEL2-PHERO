/* eslint-disable no-unused-vars */
import { Response } from 'express'

type TSuccessResponse<T> = {
  message: string
  statusCode: number

  data: T | T[] | null
}

//jei data ashbe shei datar type
const sendSuccessResponse = <T>(res: Response, data: TSuccessResponse<T>) => {
  res.status(data.statusCode).json({
    message: data.message,
    status: 'success',

    data: data.data,
  })
}

export default sendSuccessResponse
