export const SEARCH = "SEARCH";

export const search = (inputValue) => {
  return { type: SEARCH, payload: inputValue };
};
