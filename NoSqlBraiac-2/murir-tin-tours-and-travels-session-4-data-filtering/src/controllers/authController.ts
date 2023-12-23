/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const register = async (req: Request, res: Response, next: NextFunction) => {}

const login = async (req: Request, res: Response) => {}

export const authController = {
  register,
  login,
}
