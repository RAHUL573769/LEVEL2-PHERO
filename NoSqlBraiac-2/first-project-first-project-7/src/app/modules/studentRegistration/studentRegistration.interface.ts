import { Types } from 'mongoose';

export type semesterStatus = 'Upcoming' | 'Ongoing' | 'Ended';

export type TSemesterRegistration = {
  academicSemester: Types.ObjectId;

  status: semesterStatus;
  startDate: Date;
  endDate: Date;
  minCredit: number;
  maxCredit: number;
};
