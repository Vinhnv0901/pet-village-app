import actionTypes from "./actionTypes";
import * as apis from "../../apis";

export const getProducts = () => async (dispatch) => {
  try {
    const response = await apis.getProducts();
    if (response?.status === 200) {
      dispatch({
        type: actionTypes.GET_PRODUCTS,
        productData: response.data,
      });
    } else {
      dispatch({
        type: actionTypes.GET_PRODUCTS,
        productData: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS,
      productData: null,
    });
  }
};
