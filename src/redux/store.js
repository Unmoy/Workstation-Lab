import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  getProductsReducer,
  getProductDetailsReducer,
} from "./reducers/productReducer";
import cartReducer from "../redux/reducers/cartReducer";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";

const rootreducer = combineReducers({
  auth: authReducer,
  getProducts: getProductsReducer,
  cart: cartReducer,
  getProductDetails: getProductDetailsReducer,
});
const middleware = applyMiddleware(thunk);
const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
};
export const store = createStore(
  rootreducer,
  INITIAL_STATE,
  composeWithDevTools(middleware)
);
