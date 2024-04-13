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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const creteUserServices = (userDta) => __awaiter(void 0, void 0, void 0, function* () {
    const { user, password } = userDta;
    const result = yield prisma.user.create({
        data: Object.assign(Object.assign({}, user), { password })
    });
    console.log(result);
    return result;
});
const getUserServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.user.findMany();
    console.log(result);
    return result;
});
const getSearchService = (queryParas) => __awaiter(void 0, void 0, void 0, function* () {
    const { q, limit = 2, page = 1, sortBy, sortOrder } = queryParas, otherQueryParams = __rest(queryParas, ["q", "limit", "page", "sortBy", "sortOrder"]);
    console.log("Query", queryParas);
    const conditions = [];
    if (q) {
        conditions.push({
            // OR: [
            //   {
            //     userName: {
            //       contains: q
            //     }
            //   },
            //   {
            //     email: {
            //       contains: q
            //     }
            //   }
            // ]
            OR: ["userName", "email"].map((field) => ({ [field]: { contains: q } }))
        });
    }
    if (Object.keys(otherQueryParams).length > 0) {
        const filterData = Object.keys(otherQueryParams).map((key) => ({
            [key]: otherQueryParams[key]
        }));
        conditions.push(...filterData);
    }
    // if (query) {
    //   conditions.push({
    //     OR: ["username", "email"].map((field) => ({
    //       [field]: {
    //         contains: query
    //       }
    //     }))
    //   });
    // }
    // console.dir(conditions, { depth: Infinity });
    const result = yield prisma.user.findMany({
        where: {
            // OR: [
            //   {
            //     userName: {
            //       contains: q
            //     }
            //   },
            //   {
            //     email: {
            //       contains: q
            //     }
            //   }
            // ]
            AND: conditions
        },
        skip: (Number(page) - 1) * limit,
        take: Number(limit),
        orderBy: {
            [sortBy]: sortOrder
        }
    });
    console.log(queryParas);
    return result;
});
exports.UserServices = {
    creteUserServices,
    getUserServices,
    getSearchService
};
