// const initialState = 0;

// export default function reducer(state = initialState, action) {
//   switch (action.type) {
//     default: {
//       return state;
//     }
//   }
// }

import { combineReducers } from "redux";
import homePageReducer from "./homePage/reducer";

console.log("HomePage reducer", homePageReducer);

const reducer = combineReducers({
  homePage: homePageReducer,
});

export default reducer;
