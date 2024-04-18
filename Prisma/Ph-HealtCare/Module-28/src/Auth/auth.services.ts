import { prisma } from "../helpers/prismaHelpers";
import bcrypt from "bcrypt";

const loginUser = async (payload: { email: string; password: string }) => {
  const userData = await prisma.user.findUniqueOrThrow({
    where: {
      email: payload.email
    }
  });

  const isPasswordCorrect = await bcrypt.compare(
    payload.password,
    userData.password
  );
  console.log(isPasswordCorrect);
};

export const AuthServices = { loginUser };
