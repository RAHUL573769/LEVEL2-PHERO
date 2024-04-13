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

export const UserServices = { creteUserServices, getUserServices };
