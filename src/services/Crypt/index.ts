import bcrypt from 'bcrypt';


export const password_hash = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 8);
};

export const password_validate = async (password: string, hash: string) => {
  return await bcrypt.compare(password, hash);
};
