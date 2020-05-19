import { combineReducers } from "redux";
import cartPageSliceReducer from "./cartPage/reducer";
import homePageSliceReducer from "./homePage/reducer";
import productPageSliceReducer from "./productPage/reducer";

const reducer = combineReducers({
  cartPage: cartPageSliceReducer,
  homePage: homePageSliceReducer,
  productPage: productPageSliceReducer
});

export default reducer;