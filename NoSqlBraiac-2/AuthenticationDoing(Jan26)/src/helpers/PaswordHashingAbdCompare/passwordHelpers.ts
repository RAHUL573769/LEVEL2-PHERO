import bcrypt from 'bcrypt'

export const hashPassword = async (
  password: string,
  hashRounds: number,
): Promise<string> => {
  const passwordHashing = await bcrypt.hash(password, hashRounds)
  return passwordHashing
}

export const comparePassword = () => {}
