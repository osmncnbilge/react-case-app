import { combineReducers } from "redux";
import productReducer from "../Product/ProductReducer";

const rootReducer = combineReducers({
  productReducer,
});

export default rootReducer;
