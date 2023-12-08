"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const student_model_1 = require("../student/student.model");
const user_model_1 = require("./user.model");
// import { Student } from './../student/student.model';
const createStudentIntoDb = (password, studentData) => __awaiter(void 0, void 0, void 0, function* () {
    const newUserInPartialUserSchema = {};
    newUserInPartialUserSchema.role = "student";
    //   console.log("9", studentData);
    if (!password) {
        newUserInPartialUserSchema.password = "Default Password";
    }
    else {
        newUserInPartialUserSchema.password = "12334";
    }
    const newPartialUser = yield user_model_1.User.create(newUserInPartialUserSchema);
    newPartialUser.id = "20303024";
    if (Object.keys(newPartialUser).length) {
        // console.log("19", newPartialUser);
        studentData.user = newPartialUser._id;
        studentData.id = newPartialUser.id;
        const newStudent = yield student_model_1.Student.create(studentData);
        return newStudent;
    }
    // return newPartialUser;
});
exports.UserServices = {
    createStudentIntoDb
};
