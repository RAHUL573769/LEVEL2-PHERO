"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TourValidation = void 0;
const zod_1 = require("zod");
const createZodSchema = zod_1.z.object({
    name: zod_1.z.string(),
    durationHours: zod_1.z.number().int().positive().min(1),
    //   ratingsAverage: z.number().int().positive().min(1).max(5),
    price: zod_1.z.number().positive(),
});
exports.TourValidation = { createZodSchema };
