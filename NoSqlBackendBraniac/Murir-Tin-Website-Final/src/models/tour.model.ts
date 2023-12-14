import { Schema, model } from "mongoose";
import { ITour } from "../interface/tour.interface";
import slugify from "slugify";

const tourSchema = new Schema<ITour>(
  {
    name: {
      type: String
      // required: [true, "Please Tell Your Name"]
    },
    durationHours: {
      type: Number,
      required: [false, "Please Tell Your Duration Hours"]
    },
    ratingAverage: {
      type: Number,
      default: 4.5
    },
    ratingQuantity: {
      type: Number,
      default: 0
    },
    price: {
      type: Number
      // required: [true, "Please tell your Price"]
    },
    imageCover: {
      type: String,
      required: [false, "Please Tell Your Image Cover"]
    },
    images: {
      type: [String]
    },
    createdAt: {
      type: Date,
      required: false,
      default: Date.now()
    },
    startLocation: {
      type: String
    },
    endlocation: {
      type: String
    },
    locations: [String],
    slug: String
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);
//Pre hook for Query Middle ware
tourSchema.virtual("durationDays").get(function () {
  return this.durationHours / 24;
});

tourSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });

  next();
});
//Pre hook for Query Middle ware
export const Tour = model<ITour>("Tour", tourSchema);
