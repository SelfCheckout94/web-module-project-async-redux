import { SEARCH } from "./../actions";

const initialState = {
  name: "",
  nameJa: "",
  icon: "",
  url: "",
  description: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        item: action.payload,
      };
    default:
      return state;
  }
};
