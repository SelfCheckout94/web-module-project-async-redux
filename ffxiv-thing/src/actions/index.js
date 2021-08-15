import axios from "axios";

export const GRAB_ITEM = "GRAB_ITEM";
export const TOGGLE_DETAILS = "TOGGLE_DETAILS";
export const SEARCH = "SEARCH";
export const ERROR = "ERROR";

export const getItems = (props) => {
  return (dispatch) => {
    let newProps;
    if (props.includes('"')) {
      newProps = props.replace('"', "").replace('"', "");
    }
    axios
      .get(
        `https://xivapi.com/search/?string=${
          props.includes('"') ? newProps : props
        }&indexes=Item`
      )
      .then((res) => {
        dispatch({ type: GRAB_ITEM, payload: res.data.Results });
      })
      .catch((err) => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const toggleDetails = (id) => {
  return { type: TOGGLE_DETAILS, payload: id };
};

export const search = (term) => {
  return { type: SEARCH, payload: term };
};
