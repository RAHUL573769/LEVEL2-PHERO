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
const student_model_1 = require("../Student/student.model");
const user_model_1 = require("./user.model");
const createStudentIntoDb = (password, studentData) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = {};
    // let user: NewUser = {};
    // userData.password = password || "Defaukt";
    // userData.role = "student";
    userData.id = "203414342";
    //set student-role
    userData.role = "student";
    if (!password) {
        userData.password = "Set to default password as password not given";
    }
    else {
        userData.password = password;
    }
    const newUser = yield user_model_1.UserModel.create(studentData);
    //create a student
    if (Object.keys(newUser).length) {
        //set id ,_id
        studentData.id = newUser.id;
        studentData.user = newUser._id;
        const newStudent = yield student_model_1.StudentModel.create(studentData);
        return newStudent; //refrence id
    }
    console.log("32", "New Created User", newUser);
    console.log("33", "Sent STUDENT Dta", studentData);
    console.log("34", "Partial user", userData);
    // if (Object.keys(newUser).length) {
    //   studentData.id = newUser.id;
    //   studentData.user = newUser._id;
    //   const newStudent = await StudentModel.create(studentData);
    // }
});
exports.UserServices = {
    createStudentIntoDb
};
