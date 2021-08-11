import { ADD } from "./../actions";

const initialState = {
  gilPic: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        gilPic: action.payload,
      };
    default:
      return state;
  }
};
