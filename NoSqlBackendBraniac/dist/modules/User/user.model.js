"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    needsPasswordChange: {
        type: Boolean,
        default: true
    },
    role: {
        type: String,
        enum: ["student", "faculty", "admin"]
    },
    status: {
        type: String,
        enum: ["in-progress", "blocked"]
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});
const UserModel = (0, mongoose_1.model)("user", userSchema);
