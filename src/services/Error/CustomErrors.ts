export const Ok = 200;
export const CREATE = 201;
export const BAD_REQUEST = 400;
export const Unauthorized = 401;
export const NOT_FOUND = 404;
export const NOT_FOUND_CONTENT = 422;

export const setNewError = (status: number, log: string): string => {
  return JSON.stringify({ status, log });
};

export const getNewError = (data: string): { status: number; log: string } | any => {
  try {
    return JSON.parse(data);
  } catch (error) {
    return error;
  }
};
