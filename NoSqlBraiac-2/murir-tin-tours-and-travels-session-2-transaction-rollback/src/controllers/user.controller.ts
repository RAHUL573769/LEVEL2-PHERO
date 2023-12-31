/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import { userServices } from '../services/user.service'
import { newSuccessResponse } from '../utils/sendResponse'
// import sendSuccessResponse from '../utils/sendResponse'

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData = req.body
    const result = await userServices.createUser(userData)

    newSuccessResponse(res, {
      statusCode: 200,
      message: 'uSER Creted Succesfully',
      status: 'Success',
      data: result,
    })
    // res.status(200).json({
    //   message: 'User Created Succesfully',
    //   status: 'Success',
    //   data: result,
    // })
    // sendSuccessResponse(res, {
    //   statusCode: 201,
    //   message: 'User created successfully',
    //   data: result,
    // })
  } catch (error: any) {
    next(error)
  }
}

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUsers()
    res.status(200).json({
      status: 'success',
      message: 'User fetched successfully',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Something went wrong',
    })
  }
}
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const result = await userServices.getSingleUser(id)
    res.status(200).json({
      status: 'success',
      message: 'Single User fetched successfully',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Something went wrong',
    })
  }
}
const updateUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body
    const id = req.params.id
    const result = await userServices.updateUser(id, userData)
    res.status(200).json({
      status: 'success',
      message: 'User updated successfully',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Something went wrong',
    })
  }
}
const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    await userServices.deleteUser(id)
    res.status(200).json({
      status: 'success',
      message: 'User deleted successfully',
    })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Something went wrong',
    })
  }
}

export const userController = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
}
