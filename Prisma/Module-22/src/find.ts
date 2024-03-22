import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   console.log(result);

  const getAllDataFromDb = await prisma.post.findMany();

  const findFast = await prisma.post.findFirst({
    where: {
      id: 2
    }
  });
  //   console.log(getAllDataFromDb);

  console.log(findFast);
};

main();
