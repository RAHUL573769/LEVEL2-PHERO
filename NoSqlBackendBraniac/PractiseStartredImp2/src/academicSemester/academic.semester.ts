import {
  AcademicSemesterCode,
  AcademicSemesterMonth,
  AcademicSemesterName
} from "./academic.semester.conts";

export type TAcademicSemester = {
  name: AcademicSemesterName;
  code: AcademicSemesterCode;
  year: Date;
  startMonth: AcademicSemesterMonth;
  endMonth: AcademicSemesterMonth;
};
