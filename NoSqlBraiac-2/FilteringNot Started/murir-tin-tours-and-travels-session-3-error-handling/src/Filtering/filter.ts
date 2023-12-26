import { Query } from 'mongoose'
import { TQueryObj } from '../types/queryType'

export const filter = <T>(model: Query<T[], T>, queryObj: TQueryObj) => {
  const excludedFields = [
    'page',
    'searchTearm',
    'sortBy',
    'sortOrder',
    'fields',
  ]
  excludedFields.forEach((keyword) => delete queryObj[keyword])

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const query = model.find(queryObj)
  return query
}
