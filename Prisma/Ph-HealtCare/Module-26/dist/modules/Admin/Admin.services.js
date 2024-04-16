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
    console.log(query.searchTerm);
    // const whereConditions: Prisma.AdminWhereInput = { AND: andConditions };
    const result = yield prisma.admin.findMany({
        where: {
            name: {
                contains: query.searchTerm,
                mode: "insensitive"
            }
        }
    });
    return result;
});
exports.AdminServices = { getAllFromDb, getSingleFromDb };
