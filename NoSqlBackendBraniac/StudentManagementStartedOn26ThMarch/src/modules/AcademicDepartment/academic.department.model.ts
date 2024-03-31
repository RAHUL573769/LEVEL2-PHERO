import { model, Schema } from "mongoose";
import { TAcademicDepartment } from "./academic.department.interface";

const academicDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: {
      type: String,

      required: true
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: "AcademicFaculty"
    }
  },
  {
    timestamps: true
  }
);

class AppError extends Error {
  public statusCode: number;
  constructor(statusCode: number, message: string, stack = "") {
    super(message);
    this.statusCode = statusCode;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

academicDepartmentSchema.pre("save", async function (next) {
  const isAcademicDepartmentExists = await AcademicDepartment.findOne({
    name: this.name
  });

  if (!isAcademicDepartmentExists) {
    throw new AppError(204, "Academic Department Exists");
  }
  next();
});

academicDepartmentSchema.pre("findOneAndUpdate", async function (next) {
  const query = this.getQuery();
  const isDepartmentExists = await AcademicDepartment.findOne(query);

  if (!isDepartmentExists) {
    throw new Error("This Department Not Exists");
  }
  next();

  //   console.log(query);
});

export const AcademicDepartment = model<TAcademicDepartment>(
  "AcademicDepartment",
  academicDepartmentSchema
);
