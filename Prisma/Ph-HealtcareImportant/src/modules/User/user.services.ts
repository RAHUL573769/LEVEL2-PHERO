import { PrismaClient, UserRole } from "@prisma/client";

const createAdmin = async (data: any) => {
  const prisma = new PrismaClient();

  const userData = {
    email: data.admin.email,
    password: data.password,
    role: UserRole.ADMIN
  };

  const result = await prisma.$transaction(async (transactionClient) => {
    const createUser = await transactionClient.user.create({
      data: userData
    });
    const createAdmin = await transactionClient.admin.create({
      data: userData
    });
  });

  return;
};

export const UserServices = { createAdmin };
