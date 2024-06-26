/* eslint-disable @typescript-eslint/ban-types */
import { Model } from 'mongoose'

interface ITour {
  name: string
  durationHours: number
  ratingAverage: number
  ratingQuantity: number
  price: number
  availableSeats: number
  imageCover: string
  images: string[]
  createdAt: string
  startDates: string[]
  startLocation: string
  locations: string[]
  slug: string
}

interface ITourMethods {
  getNextNearestStartDateAndEndDate(): {
    nearestStartDate: Date | null
    estimatedEndDate: Date | null
  }
}

type TTourModel = Model<ITour, {}, ITourMethods>

export { ITour, ITourMethods, TTourModel }
