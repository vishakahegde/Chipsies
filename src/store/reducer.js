import { combineReducers } from "redux";
import cartPageSliceReducer from "./cart/reducer";
import productPageSliceReducer from "./products/reducer";

const reducer = combineReducers({
  cartPage: cartPageSliceReducer,
  productPage: productPageSliceReducer
});

export default reducer;