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
exports.AdminServices = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    // const { searchTerm } = query;
    // console.log(searchTerm);
    // const andConditions: Prisma.AdminWhereInput[] = [];
    // if (searchTerm) {
    //   andConditions.push({
    //     OR: [
    //       {
    //         name: {
    //           contains: query.searchTerm,
    //           mode: "insensitive"
    //         }
    //       },
    //       {
    //         email: {
    //           contains: query.searchTerm,
    //           mode: "insensitive"
    //         }
    //       }
    //     ]
    //   });
    // }
    // const whereConditions: Prisma.AdminWhereInput = { AND: andConditions };
    const result = yield prisma.admin.findMany();
    return result;
});
const getSingleFromDb = (query) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("query", query);
    // [
    //   {
    //     name: {
    //       contains: query.searchTerm,
    //       mode: "insensitive"
    //     }
    //   },
    //   {
    //     email: {
    //       contains: query.searchTerm,
    //       mode: "insensitive"
    //     }
    //   }
    // ]
    const { searchTerm } = query, filteredData = __rest(query, ["searchTerm"]);
    // console.log(filteredData);
    const andConditions = [];
    const adminSearchableFields = ["name", "email"];
    if (searchTerm) {
        andConditions.push({
            OR: adminSearchableFields.map((field) => ({
                [field]: {
                    contains: query.searchTerm
                }
            }))
        });
    }
    const termsExceptSearchTerm = Object.keys(filteredData);
    if (termsExceptSearchTerm.length > 0) {
        andConditions.push({
            AND: Object.keys(filteredData).map((key) => ({
                [key]: {
                    equals: filteredData[key]
                }
            }))
        });
    }
    // console.log(query.searchTerm);
    const whereConditions = { AND: andConditions };
    const result = yield prisma.admin.findMany({
        where: whereConditions
        // OR: [
        //   {
        //     name: {
        //       contains: query.searchTerm,
        //       mode: "insensitive"
        //     }
        //   },
        //   {
        //     email: {
        //       contains: query.searchTerm,
        //       mode: "insensitive"
        //     }
        //   }
        // ]
    });
    return result;
});
exports.AdminServices = { getAllFromDb, getSingleFromDb };
