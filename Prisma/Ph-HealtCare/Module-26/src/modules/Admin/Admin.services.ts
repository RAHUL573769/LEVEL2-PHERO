import { Prisma, PrismaClient } from "@prisma/client";
import { adminSearchAbleFields } from "./admin.constants";

const prisma = new PrismaClient();

const getAllFromDb = async () => {
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
  const result = await prisma.admin.findMany();
  return result;
};
const getSingleFromDb = async (params: any) => {
  // const { page, limit, skip } = paginationHelper.calculatePagination(options);
  const { searchTerm, ...filterData } = params;
  const andConditions: Prisma.AdminWhereInput[] = [];

  console.log("Filteres data", filterData);
  if (params.searchTerm) {
    andConditions.push({
      OR: adminSearchAbleFields.map((field) => ({
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
  const whereConditions: Prisma.AdminWhereInput = { AND: andConditions };

  const result = await prisma.admin.findMany({
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
};

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

export const AdminServices = { getAllFromDb, getSingleFromDb };
