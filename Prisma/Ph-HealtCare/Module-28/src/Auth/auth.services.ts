import { generateToken } from "../helpers/jwtHelpers";
import { prisma } from "../helpers/prismaHelpers";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// const generateToken=(payload:any,secret:string,expiresIn:string)=>{
//   var token = jwt.sign(
//     { email: userData.email, role: userData.role },
//     "privateKey",
//     {
//       expiresIn: "60m"
//     }
//   );
// }

// const generateToken = (payload: any, secret: string, expiresIn: string) => {
//   var token = jwt.sign(payload, secret, {
//     expiresIn: expiresIn
//   });
//   return token;
// };
const loginUser = async (payload: { email: string; password: string }) => {
  const userData = await prisma.user.findUniqueOrThrow({
    where: {
      email: payload.email
    }
  });
  // console.log(payload.password, userData.password);
  const isPasswordCorrect: boolean = await bcrypt.compare(
    payload.password,
    userData.password
  );
  // console.log(isPasswordCorrect);
  if (!isPasswordCorrect) {
    throw new Error("Password Incorrect");
  }

  // var token = jwt.sign(
  //   { email: userData.email, role: userData.role },
  //   "privateKey",
  //   {
  //     expiresIn: "60m"
  //   }
  // );
  var token = generateToken(
    { email: userData.email, role: userData.role },
    "abcd",
    "5m"
  );
  // const refreshToken = jwt.sign(
  //   { email: userData.email, role: userData.role },
  //   "abcd",
  //   {
  //     expiresIn: "60m"
  //   }
  // );
  const refreshToken = generateToken(
    { email: userData.email, role: userData.role },
    "abcdefgh",
    "5m"
  );
  // return userData;
  return {
    refreshToken,
    token,
    needsPasswordChange: userData.needsPasswordChange
  };
};

const refreshToken = async (token: string) => {
  // console.log("Refresh Token", token);
  let decodedData;
  // const decodedData = jwt.verify(token, "abcdefgh");
  try {
    const decodedData = jwt.verify(token, "abcdefgh");
    console.log("DecodedData", decodedData);
    const isUserExists = await prisma.user.findUnique({
      where: {
        email: decodedData?.email as string
      }
    });
    // return isUserExists;
  } catch (error) {
    throw new Error("You are not Verified");
  }
};
export const AuthServices = { loginUser, refreshToken };
