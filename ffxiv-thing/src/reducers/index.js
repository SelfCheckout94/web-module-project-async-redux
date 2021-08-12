import { SEARCH } from "./../actions";

const initialState = {
  search: "",
  item: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
};
