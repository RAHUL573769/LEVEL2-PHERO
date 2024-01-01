import { Schema } from "mongoose";

export interface IReview {
  review: string;
  rating: number;
  createdAt: Date;
  user: Schema.Types.ObjectId;
  tour: Schema.Types.ObjectId;
}
