import { Schema } from "mongoose";

export type studentGender = "male" | "female" | "others";
export type studentBloodGroup = "A+" | "A-" | "B+";
export type studentGuardian = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type studentLocalGuardian = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type studentName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

// --------------------From Model-----------

export const studentNameSchema = new Schema<studentName>({
  firstName: {
    type: String,
    required: [true, "Student First Name is Required"]
  },
  middleName: {
    type: String
  },
  lastName: {
    type: String,
    required: [true, "Student Last Name is Required"]
  }
});
export const localGuardianName = new Schema<studentLocalGuardian>({
  firstName: {
    type: String,
    required: [true, "Student's Local  First Name is Required"]
  },
  middleName: {
    type: String
  },
  lastName: {
    type: String,
    required: [true, "Student's Local Last Name is Required"]
  }
});

export const guardianName = new Schema<studentGuardian>({
  firstName: {
    type: String,
    required: [true, "Student's Guardian  First Name is Required"]
  },
  middleName: {
    type: String
  },
  lastName: {
    type: String,
    required: [true, "Student's  Guardian Last Name is Required"]
  }
});

export const StudentBloodGroup: studentBloodGroup[] = ["A+", "A-", "B+"];
export const StudentGender: studentGender[] = ["female", "male", "others"];
