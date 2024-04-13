import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const creteUserServices = async (userDta: any) => {
  const { user, password } = userDta;
  const result = await prisma.user.create({
    data: { ...user, password }
  });
  console.log(result);
  return result;
};

const getUserServices = async () => {
  const result = await prisma.user.findMany();
  console.log(result);
  return result;
};

const getSearchService = async (queryParas: any) => {
  const {
    q,
    limit = 2,
    page = 1,
    sortBy,
    sortOrder,
    ...otherQueryParams
  } = queryParas;
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
  const result = await prisma.user.findMany({
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
};

export const UserServices = {
  creteUserServices,
  getUserServices,
  getSearchService
};
