import axios from "axios";
import {
  GET_PRODUCTS_BY_ID_FAIL,
  GET_PRODUCTS_BY_ID_REQUEST,
  GET_PRODUCTS_BY_ID_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "../constants/productConstants";

export const listProductsAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCTS_REQUEST });
    const { data } = await axios.get("http://localhost:5000/api/products");

    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_FAIL });
  }
};
export const productDetailsAction =
  (id = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: GET_PRODUCTS_BY_ID_REQUEST });
      const { data } = await axios.get(
        `http://localhost:5000/api/products/${id}`
      );

      dispatch({ type: GET_PRODUCTS_BY_ID_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_BY_ID_FAIL });
    }
  };
