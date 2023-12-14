"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Review1 = void 0;
const mongoose_1 = require("mongoose");
const reviewSchema = new mongoose_1.Schema({
    review: {
        type: String,
        required: [true, "Please tell Your Review"]
    },
    rating: {
        type: Number,
        required: [true, "Please tell Your Ratings"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    tour: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Tour",
        required: [true, "Please tell Your Tour"]
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Please tell Your User Name"]
    }
});
//Pre hook for Query Middle ware
//Pre hook for Query Middle ware
exports.Review1 = (0, mongoose_1.model)("Review", reviewSchema);
