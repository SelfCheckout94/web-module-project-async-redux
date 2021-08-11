export const SEARCH = "SEARCH";

export const getItem = () => {};

export const search = (item) => {
  return { type: SEARCH, payload: item };
};
