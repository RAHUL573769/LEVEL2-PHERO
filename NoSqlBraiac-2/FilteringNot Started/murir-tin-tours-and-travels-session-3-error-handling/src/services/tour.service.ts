/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { filter } from '../Filtering/filter'
import { ITour } from '../interfaces/tour.interface'
import Tour from '../models/tour.model'
import { TQueryObj } from '../types/queryType'

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

const getAllTours = async (query: TQueryObj): Promise<ITour[]> => {
  // const queryObj = { ...query }
  // console.log('Before Excluding', queryObj)

  // const result = await filter(Tour.find(), queryObj)
  //await dibo na
  const modelQuery = filter(Tour.find(), query)
  // console.log('After Excluding', queryObj)

  // if (query.searchTerm) {
  //   modelQuery.find({ name: { $regex: query.searchTerm, $options: 'i' } })
  // } //not working

  if (query.searchTerm) {
    const fieldValues = Object.values(modelQuery.model.schema.paths)
    // console.log(fieldValues)
    console.log(modelQuery.model.schema.path('name'), 'path function')
    console.log(modelQuery.model.schema.paths, 'path Array')

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const searchableFields = fieldValues.filter((fieldObj) => {
      if (modelQuery.model.schema.path(fieldObj.path).instance === 'String')
        return {
          [fieldObj.path]: { $regex: query.searchTerm, $options: 'i' },
        }
    })
    const searchTerm = new RegExp(query.searchTerm, 'i')
    modelQuery.find({ name: searchTerm })
  }
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
