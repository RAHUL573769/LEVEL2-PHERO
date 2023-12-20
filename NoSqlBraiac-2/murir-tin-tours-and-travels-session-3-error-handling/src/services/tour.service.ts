/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Query } from 'mongoose'
import { ITour } from '../interfaces/tour.interface'
import Tour from '../models/tour.model'
// import { TQueryObj } from '../types/TQuery'
import { filter } from '../helpers/errorHelpers/filterHelpers'
import { TQueryObj } from '../types/TQuery'

const createTour = async (tourData: any): Promise<ITour> => {
  const result = await Tour.create(tourData)

  return result
}

// const filter = <T>(modelQuery: Query<T[], T>, queryObj: TQueryObj) => {
//   //
//   const excludeFields = [
//     'page',
//     'searchTerm',
//     'limit',
//     'sortBy',
//     'sortOrder',
//     'fields',
//   ]

//   excludeFields.forEach((keyword) => delete queryObj[keyword])
//   const query = modelQuery.find(queryObj)
//   return query
// }

const getAllTours = async (query: TQueryObj): Promise<ITour[]> => {
  // const queryObject = { ...query }

  const modelQuery = await filter(Tour.find(), query)
  // if (query.searchTerm) {
  //   modelQuery.find({name:{$regex:query.searchTerm}})
  // }

  console.log('36', query)

  // console.log('Query Object Before Delete', queryObject) //filtering

  // const excludeFields = [
  //   'page',
  //   'searchTerm',
  //   'limit',
  //   'price',
  //   'sortBy',
  //   'sortOrder',
  //   'fields',
  // ] //reserved keywords for filtering

  // excludeFields.forEach((keyword) => delete queryObject[keyword])
  // console.log('Query object after delete', queryObject)
  // const result = await Tour.find(queryObject)
  // const result = await filter(Tour.find({ price: { $lt: 1200 } }), query)
  // console.log(result)
  const result = await modelQuery
  return result
}

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

export const tourServices = {
  createTour,
  getAllTours,
  getSingleTour,
  updateTour,
  deleteTour,
  getNextSchedule,
}
