/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Query } from 'mongoose'
import { ITour } from '../interfaces/tour.interface'
import Tour from '../models/tour.model'

const createTour = async (tourData: any): Promise<ITour> => {
  const result = await Tour.create(tourData)

  return result
}

type TQueryObj = {
  [key: string]: unknown //for record string unknown
  page?: string
  searchTerm?: string
  limit?: string
  sortBy?: string
  sortOrder?: string
  fields?: string
}

// eslint-disable-next-line no-unused-vars
const filter = <T>(model: Query<T[], T>, queryObj: TQueryObj) => {
  // const excludeFields = [
  //   'page',
  //   'searchTerm',
  //   'limit',
  //   'sortBy',
  //   'sortOrder',
  //   'fields',
  // ]

  const query = model.find(queryObj)
  return query
}

const getAllTours = async (query: any): Promise<ITour[]> => {
  const quryObject = { ...query }
  console.log('Query Object Before Delete', quryObject) //filtering

  const excludeFields = [
    'page',
    'searchTerm',
    'limit',
    'sortBy',
    'sortOrder',
    'fields',
  ]

  excludeFields.forEach((keyword) => delete quryObject[keyword])
  console.log('Query object after delete', quryObject)
  // const result = await Tour.find(quryObject)
  const result = await filter(Tour.find({ price: { $lt: 1200 } }), query)
  console.log(result)
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
