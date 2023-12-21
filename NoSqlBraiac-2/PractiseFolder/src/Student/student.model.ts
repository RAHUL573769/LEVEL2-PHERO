import { Schema, model } from "mongoose";
import { IStudent } from "./student.interface";
import {
  studentBloodGroup,
  studentGender,
  studentGuardian,
  studentLocalGuardian,
  studentName
} from "../constants/student.constants";
const studentNameSchema = new Schema<studentName>({
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
const localGuardianName = new Schema<studentLocalGuardian>({
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

const guardianName = new Schema<studentGuardian>({
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

const StudentBloodGroup: studentBloodGroup[] = ["A+", "A-", "B+"];
const StudentGender: studentGender[] = ["female", "male", "others"];

const studentSchema = new Schema<IStudent>({
  id: {
    type: String,
    unique: true,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  name: {
    type: String,
    name: studentNameSchema
  },
  password: {
    type: String
  },
  gender: {
    type: String,
    enum: {
      values: StudentGender
    }
  },
  dateOfBirth: {
    type: Date
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please Give Email"]
  },
  contactNumber: {
    type: Number
  },
  emergencyContactNumber: {
    type: Number,
    required: [true, "Please Give Emergency Contact Number"]
  },
  presentAddress: {
    type: String
  },
  permanentAddress: {
    type: String,
    required: [true, "Please Give Permanent Address"]
  },
  bloodGroup: {
    type: String,
    values: StudentBloodGroup
  },
  guardianName: {
    type: String,
    values: guardianName
  },
  localGuardianName: {
    type: String,
    values: localGuardianName
  },

  profileImage: {
    type: [Object]
  },
  academicDepartment: {
    type: Schema.Types.ObjectId
  },
  academicSemester: {
    type: Schema.Types.ObjectId
  }
});

const Student = model<IStudent>("Student", studentSchema);
