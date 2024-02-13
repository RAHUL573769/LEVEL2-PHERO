"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const user_constanta_1 = require("../constants/user.constanta");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        select: 0
    },
    email: {
        type: String,
        unique: true
    },
    photo: {
        type: String
    },
    role: {
        type: String,
        enum: {
            values: Object.values(user_constanta_1.USER_ROLE)
        }
    },
    userStatus: {
        type: String,
        enum: {
            values: Object.values(user_constanta_1.USER_STATUS),
            message: "Role is either User or Admin,"
        }
    }
});
exports.User = (0, mongoose_1.model)("User", userSchema);
