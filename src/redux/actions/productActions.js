export const getProducts = () => {
  return (dispatch, getState) => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "GET_PRODUCTS",
          payload: data,
        });
      });
  };
};
export const getProductsDetails = (id) => {
  return (dispatch, getState) => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "GET_PRODUCT_DETAILS",
          payload: data,
        });
      });
  };
};
