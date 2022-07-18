import {
    GET_PRODUCTS_BY_ID_REQUEST,
  GET_PRODUCTS_BY_ID_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "../constants/productConstants";

export const productReducer = (
  state = { products: [], loading: false },
  action
) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return { loading: true };
    case GET_PRODUCTS_SUCCESS:
      return { loading: false, products: action.payload };
    case GET_PRODUCTS_FAIL:
      return { loading: true };

    default:
      return state;
  }
};
export const productDetailsReducer = (
  state = { product: { }, loading: false },
  action
) => {
  switch (action.type) {
    case GET_PRODUCTS_BY_ID_REQUEST:
      return { loading: true };
    case GET_PRODUCTS_BY_ID_SUCCESS:
      return { loading: false, product: action.payload };
    case GET_PRODUCTS_FAIL:
      return { loading: true };

    default:
      return state;
  }
};
