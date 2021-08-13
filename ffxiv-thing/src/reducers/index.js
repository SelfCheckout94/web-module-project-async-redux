import { GRAB_ITEM, SEARCH, TOGGLE_DETAILS } from "./../actions";

const initialState = {
  item: [],
  showDetails: false,
  searchedItem: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GRAB_ITEM:
      return {
        ...state,
        item: action.payload,
      };
    case TOGGLE_DETAILS:
      return {
        ...state,
        showDetails: false,
      };
    case SEARCH:
      return {
        ...state,
        searchedItem: action.payload,
      };
    default:
      return state;
  }
};
