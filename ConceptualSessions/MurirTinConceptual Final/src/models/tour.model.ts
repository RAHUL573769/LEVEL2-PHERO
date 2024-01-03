import { Schema, model } from "mongoose";
import { ITour, ITourMethods, ITourModel } from "../interface/tour.interface";

const tourSchema = new Schema<ITour, ITourModel, ITourMethods>(
  {
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
    startDate: { type: [Date] },
    startLocation: { type: String },

    slug: {
      type: String
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);
//pre hook for query middleware
// userSchema.pre("find", function (next) {
//   this.find({ userStatus: { $eq: "inactive" } });

//   next();
// });

tourSchema.virtual("reviews", {
  ref: "Review",
  foreignField: "tour",
  localField: "_id"
});
tourSchema.virtual("durationDays").get(function () {
  return this.durationHours / 24;
});
tourSchema.methods.getNearestStartDate = function (): {
  nextNearestDate: Date;
  estimatedEndDate: Date;
} {
  const today = new Date();
  const futureDates = this.startDate.filter((singleStartDate: Date) => {
    return singleStartDate > today;
  });
  futureDates.sort((a: Date, b: Date) => a.getTime() - b.getTime());

  const nextNearestDate = futureDates[0];
  const estimatedEndDate = new Date(
    nextNearestDate.getTime() + this.durationHours * 60 * 60 * 1000
  );

  return {
    nextNearestDate,
    estimatedEndDate
  };
};
export const Tour = model<ITour, ITourModel>("Tour", tourSchema);
