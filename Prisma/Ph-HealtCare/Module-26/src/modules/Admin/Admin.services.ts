import { Prisma, PrismaClient } from "@prisma/client";

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

const getSingleFromDb = async (query: any) => {
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
  const result = await prisma.admin.findMany({
    where: {
      name: {
        contains: query.searchTerm,
        mode: "insensitive"
      }
    }
  });
  return result;
};

export const AdminServices = { getAllFromDb, getSingleFromDb };
