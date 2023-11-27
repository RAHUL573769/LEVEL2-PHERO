"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quardianSchema = void 0;
const mongoose_1 = require("mongoose");
const studentNameSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String
    },
    lastName: {
        type: String,
        required: true
    }
});
exports.quardianSchema = new mongoose_1.Schema({
    firstName: String,
    middleName: String,
    lastName: String
});
const studentSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: [true, "Id is Required"],
        unique: true
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId
    },
    name: {
        type: String,
        name: studentNameSchema
    },
    gender: {
        type: String,
        enum: {
            values: ["Male", "Female"]
        }
    },
    dateOfBirth: {
        type: String
    },
    email: {
        type: String,
        required: [true, "Email is Required"]
    },
    contactNumber: {
        type: String
    },
    emergencyContactNumber: {
        type: String,
        required: [true, "This is Needed"]
    },
    bloodGroup: {
        type: String,
        enum: {
            values: ["A+", "A-"]
        }
    },
    presentAddress: {
        type: String
    },
    permanentAddress: {
        type: String
    },
    guardian: {
        type: String,
        name: exports.quardianSchema
    },
    localGuardian: {},
    profileImage: {
        type: String
    },
    isDeleted: {}
});
