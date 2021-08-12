import axios from "axios";

export const SEARCH = "SEARCH";

// export const getItem = () => {
//   return dispatch => {
//     axios
//       .get('https://xivapi.com/search/?indexes=Item')
//       .then(res => {
//         dispatch()
//       })
//   }
// };

export const search = (item) => {
  return { type: SEARCH, payload: item };
};
