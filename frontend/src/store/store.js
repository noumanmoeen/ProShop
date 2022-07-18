import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productDetailsReducer, productReducer } from "./reducers/productsReducers";

const reducers = combineReducers({
  productsList : productReducer,
  productDetails : productDetailsReducer

});

const initialState = {};

const middleWares = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWares))
);

export default store;
