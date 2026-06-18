

export const transformDocument = (doc, ret) => {
  ret.id = ret._id.toString();
  delete ret._id;
  return ret;
};

export const DEFAULT_PAGE_SIZE = 10;
export const MAX_PAGE_SIZE = 100;
export const DEFAULT_PAGE_NUMBER = 1;
export const api_endpoint = '/api/caterers';