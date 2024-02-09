import {
  TAcademicSemesterCode,
  TAcademicSemesterName,
  TMonths
} from "./academinSemesterContants";

export type TAcademicSemester = {
  name: TAcademicSemesterName;
  code: TAcademicSemesterCode;
  year: Date;
  startMonth: TMonths;
  endMonth: TMonths;
};
export type TAcademicSemesterMapper = {
  [key: string]: string;
};
