import mongoose from 'mongoose';
import {
  TSemesterRegistration,
  semesterStatus,
} from './studentRegistration.interface';
import { Schema } from 'mongoose';

export const StudentRegistrationStatus: semesterStatus[] = [
  'Upcoming',
  'Ended',
  'Ongoing',
];
const semesterRegistrationSchema = new mongoose.Schema<TSemesterRegistration>(
  {
    academicSemester: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicSemester',
      unique: true,
    },
    status: {
      type: String,
      enum: {
        values: StudentRegistrationStatus,
      },
      default: 'Upcoming',
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    minCredit: {
      type: Number,
      default: 3,
    },
    maxCredit: {
      type: Number,
      default: 15,
    },
  },
  {
    timestamps: true,
  },
);

export const SemesterRegistration = mongoose.model<TSemesterRegistration>(
  'SemesterRegistration',
  semesterRegistrationSchema,
);
