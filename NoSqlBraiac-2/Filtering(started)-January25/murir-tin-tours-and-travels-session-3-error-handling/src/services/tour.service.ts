/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Query } from 'mongoose'
import { ITour } from '../interfaces/tour.interface'
import Tour from '../models/tour.model'
import { TQueryObj } from '../types/queryType'
import { filter } from '../Filtering/filter'

const createTour = async (tourData: any): Promise<ITour> => {
  const result = await Tour.create(tourData)

  return result
}
// type TQueryObj = {
//   [key: string]: unknown
//   page?: string
//   limit?: string
//   searchTerm?: string
//   fields?: string
//   sortBy?: string
// }

//Query T[]=ITour[]
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const filter = <T>(model: Query<T[], T>, queryObj: TQueryObj) => {
//   const excludedFields = [
//     'page',
//     'searchTearm',
//     'sortBy',
//     'sortOrder',
//     'fields',
//   ]
//   excludedFields.forEach((keyword) => delete queryObj[keyword])

//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   let query = model.find(queryObj)
//   return query
// }

const getSingleTour = async (id: string): Promise<ITour | null> => {
  const result = await Tour.findById(id).populate('reviews')
  return result
}

const updateTour = async (
  id: string,
  tourData: ITour,
): Promise<ITour | null> => {
  const result = await Tour.findByIdAndUpdate(id, tourData, {
    new: true,
    runValidators: true,
  })

  return result
}

const deleteTour = async (id: string): Promise<ITour | null> => {
  const result = await Tour.findByIdAndDelete(id)
  return result
}

const getNextSchedule = async (id: string): Promise<any> => {
  const tour = await Tour.findById(id)
  const nextSchedule = tour?.getNextNearestStartDateAndEndDate()

  return {
    tour,
    nextSchedule,
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars

const getAllTour = async (query: TQueryObj): Promise<ITour[]> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const queryObj = { ...query }
  // const excludedObj = [
  //   'page',
  //   'fields',
  //   'searchTerm',
  //   'limit',
  //   'sortBy',
  //   'sortOrder',
  // ]

  // const result = await Tour.find()
  //exact match down here
  const modelQuery = filter(Tour.find(), query)
  //partial match mane searching
  if (query.searchTerm) {
    // console.log('Here')
    modelQuery.find({ name: { $regex: query.searchTerm, $options: 'i' } })
  }
  const result = await modelQuery

  return result
}

export const tourServices = {
  createTour,

  getSingleTour,
  updateTour,
  deleteTour,
  getAllTour,
  getNextSchedule,
}