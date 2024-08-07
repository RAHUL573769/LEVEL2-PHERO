"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = void 0;
const zod_1 = require("zod");
exports.update = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        contactNumber: zod_1.z.string()
    })
});
