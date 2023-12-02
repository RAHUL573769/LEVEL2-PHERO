"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const tourSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Please tell us your name"]
    },
    durationHours: {
        type: Number,
        required: [true, "Please tell us your durationHours"]
    },
    ratingAverage: {
        type: Number,
        default: 4.5
    },
    ratingQuality: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: [true, "Please tell us your price"]
    },
    imageCover: {
        type: String,
        required: [true, "Please tell us your imageCover"]
    },
    images: [String],
    createdAt: {
        type: Date,
        default: Date.now()
    },
    startDate: [Date],
    startLocation: {
        type: String,
        required: [true, "Please tell us your startLocation"]
    },
    availableSeats: {
        type: Number,
        required: [true, "Please tell us your availableSeats"]
    },
    locations: [String],
    slug: String
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
