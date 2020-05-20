import { combineReducers } from "redux";
import cartPageSliceReducer from "./cart/reducer";
import homePageSliceReducer from "./homePage/reducer";
import productPageSliceReducer from "./products/reducer";

const reducer = combineReducers({
  cartPage: cartPageSliceReducer,
  homePage: homePageSliceReducer,
  productPage: productPageSliceReducer
});

export default reducer;