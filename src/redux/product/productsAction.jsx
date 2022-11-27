import axios from "axios";

const fetchProductsRequest = () => {
  return {
    type: "FETCH_PRODUCT_REQUEST",
  };
};

const fetchProductsSuccess = (products) => {
  return {
    type: "FETCH_PRODUCT_SUCCESS",
    payload: products,
  };
};

const fetchProductsFailure = (error) => {
  return {
    type: "FETCH_PRODUCT_FAILURE",
    payload: error,
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const products = response.data;
        dispatch(fetchProductsSuccess());
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchProductsFailure(errorMsg));
      });
  };
};
