import axios from "axios";

export const GRAB_ITEM = "GRAB_ITEM";
export const TOGGLE_DETAILS = "TOGGLE_DETAILS";
export const SEARCH = "SEARCH";

export const getItems = (item) => {
  return (dispatch) => {
    axios
      .get(`https://xivapi.com/search/?indexes=Item`)
      .then((res) => {
        dispatch({ type: GRAB_ITEM, payload: res.data.Results });
      })
      .catch((err) => {
        dispatch({ type: TOGGLE_DETAILS, payload: err });
      });
  };
};

export const grabItem = (item) => {
  return { type: GRAB_ITEM, payload: item };
};

export const toggleDetails = (id) => {
  return { type: TOGGLE_DETAILS, payload: id };
};

export const search = (thing) => {
  return { type: SEARCH, payload: thing };
};
