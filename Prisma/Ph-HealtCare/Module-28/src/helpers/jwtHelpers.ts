import jwt from "jsonwebtoken";
export const generateToken = (
  payload: any,
  secret: string,
  expiresIn: string
) => {
  var token = jwt.sign(payload, secret, {
    expiresIn: expiresIn
  });
  return token;
};
