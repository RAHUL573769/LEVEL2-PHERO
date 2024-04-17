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
const admin_constants_1 = require("./admin.constants");
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
const getSingleFromDb = (params) => __awaiter(void 0, void 0, void 0, function* () {
    // const { page, limit, skip } = paginationHelper.calculatePagination(options);
    const { searchTerm } = params, filterData = __rest(params, ["searchTerm"]);
    const andConditions = [];
    console.log("Filteres data", filterData);
    if (params.searchTerm) {
        andConditions.push({
            OR: admin_constants_1.adminSearchAbleFields.map((field) => ({
                [field]: {
                    contains: params.searchTerm,
                    mode: "insensitive"
                }
            }))
        });
    }
    if (Object.keys(filterData).length > 0) {
        andConditions.push({
            AND: Object.keys(filterData).map((key) => ({
                [key]: {
                    equals: filterData[key]
                }
            }))
        });
    }
    //console.dir(andConditions, { depth: 'infinity' })
    const whereConditions = { AND: andConditions };
    const result = yield prisma.admin.findMany({
        where: whereConditions
        // skip,
        // tak limit,e:
        // orderBy: options.sortBy && options.sortOrder ? {
        //     [options.sortBy]: options.sortOrder
        // } : {
        //     createdAt: 'desc'
        // }
    });
    return result;
});
// const getSingleFromDb = async (query: any) => {
//   console.log("query", query);
//   // [
//   //   {
//   //     name: {
//   //       contains: query.searchTerm,
//   //       mode: "insensitive"
//   //     }
//   //   },
//   //   {
//   //     email: {
//   //       contains: query.searchTerm,
//   //       mode: "insensitive"
//   //     }
//   //   }
//   // ]
//   const { searchTerm, ...filteredData } = query;
//   // console.log(filteredData);
//   const andConditions: Prisma.AdminWhereInput[] = [];
//   const adminSearchableFields = ["name", "email"];
//   if (query.searchTerm) {
//     andConditions.push({
//       OR: adminSearchableFields.map((field) => ({
//         [field]: {
//           contains: query.searchTerm
//         }
//       }))
//     });
//   }
//   const termsExceptSearchTerm = Object.keys(filteredData);
//   if (termsExceptSearchTerm.length > 0) {
//     andConditions.push({
//       AND: Object.keys(filteredData).map((key) => ({
//         [key]: {
//           equals: filteredData[key]
//         }
//       }))
//     });
//   }
//   // console.log(query.searchTerm);
//   const whereConditions: Prisma.AdminWhereInput = { AND: andConditions };
//   const result = await prisma.admin.findMany({
//     where: whereConditions
//     // OR: [
//     //   {
//     //     name: {
//     //       contains: query.searchTerm,
//     //       mode: "insensitive"
//     //     }
//     //   },
//     //   {
//     //     email: {
//     //       contains: query.searchTerm,
//     //       mode: "insensitive"
//     //     }
//     //   }
//     // ]
//   });
//   return result;
// };
exports.AdminServices = { getAllFromDb, getSingleFromDb };
