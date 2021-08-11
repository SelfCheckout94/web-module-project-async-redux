import { ADD } from "./../actions";

const initialState = {
  itemPic: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        itemPic: action.payload,
      };
    default:
      return state;
  }
};
