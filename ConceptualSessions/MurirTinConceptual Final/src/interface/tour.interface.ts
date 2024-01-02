import { Model, model } from "mongoose";
export interface ITour {
  name: string;
  durationHours: number;
  ratingAverage: number;
  ratingQuality: number;
  price: number;
  imageCover: string;
  images: string[];
  createdAt: Date;
  startDate: Date[];
  startLocation: string;
  location: string[];
  slug: string;
}

export interface ITourMethods {
  getNearestStartDate(): {
    nextNearestDate: Date;
    estimatedEndDate: Date;
  };
}

export type ITourModel = Model<ITour, {}, ITourMethods>;
