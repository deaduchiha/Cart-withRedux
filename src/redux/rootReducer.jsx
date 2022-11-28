import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import productsReducer from "./product/productsReducer";

const rootReducer = combineReducers({
  productsState: productsReducer,
  cartState: cartReducer,
});

export default rootReducer;
