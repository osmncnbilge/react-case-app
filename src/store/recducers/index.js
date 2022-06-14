import { combineReducers } from "redux";
import productReducer from "../Product/ProductReducer";
import categoryReducer from "../Category/CategoryReducer";

const rootReducer = combineReducers({
  productReducer,
  categoryReducer,
});

export default rootReducer;
