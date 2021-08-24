import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  getProductsReducer,
  getProductDetailsReducer,
} from "./reducers/productReducer";
import cartReducer from "../redux/reducers/cartReducer";
import thunk from "redux-thunk";

const rootreducer = combineReducers({
  getProducts: getProductsReducer,
  cart: cartReducer,
  getProductDetails: getProductDetailsReducer,
});
const middleware = applyMiddleware(thunk);

export const store = createStore(rootreducer, composeWithDevTools(middleware));
