import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const result = await prisma.post.create({
    data: {
      title: "This is Title",
      author: "AuhorName",
      content: "This is Content"
    }
  });

  console.log(result);
};

main();
