import { z } from 'zod';

const loginAuthentication = z.object({
  body: z.object({
    id: z.string({ required_error: 'Id is Required' }),
  }),
});

export const AuthValidation = {
  loginAuthentication,
};
