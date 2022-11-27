import { combineReducers } from "redux";
import productsReducer from "./product/productsReducer";

const rootReducer = combineReducers({
  productsState: productsReducer,
});

export default rootReducer;
