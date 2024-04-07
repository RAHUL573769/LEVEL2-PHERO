import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllFromDb = async (query: any) => {
  console.log("query", query);

  const { searchTerm } = query;
  console.log(searchTerm);

  const andConditions: Prisma.AdminWhereInput[] = [];




  
  if (searchTerm) {
    andConditions.push({
      OR: [
        {
          name: {
            contains: query.searchTerm,
            mode: "insensitive"
          }
        },
        {
          email: {
            contains: query.searchTerm,
            mode: "insensitive"
          }
        }
      ]
    });
  }
  const whereConditions: Prisma.AdminWhereInput = { AND: andConditions };
  const result = await prisma.admin.findMany({
    where: whereConditions
  });
  return result;
};

export const AdminServices = { getAllFromDb };
