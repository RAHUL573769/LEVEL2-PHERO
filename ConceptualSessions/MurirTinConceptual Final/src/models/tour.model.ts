import { Schema, model } from "mongoose";
import { ITour } from "../interface/tour.interface";

const tourSchema = new Schema<ITour>({
  name: {
    type: String,
    required: [true, "Please Provide Name"]
  },
  durationHours: {
    type: Number,
    required: [true, "Please Provide Duration Hours"]
  },
  ratingAverage: {
    type: Number,
    default: 4.5
  },
  ratingQuality: {
    type: Number,
    default: 0
  },
  price: {
    type: Number
  },
  imageCover: {
    type: String
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now
  },
  location: {
    type: [String]
  },
  startDate: { type: Date },
  startLocation: { type: String },

  slug: {
    type: String
  }
});
//pre hook for query middleware
// userSchema.pre("find", function (next) {
//   this.find({ userStatus: { $eq: "inactive" } });

//   next();
// });

export const Tour = model<ITour>("Tour", tourSchema);
