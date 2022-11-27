import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Reducer
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
