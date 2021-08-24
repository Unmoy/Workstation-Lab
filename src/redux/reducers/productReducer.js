export const getProductsReducer = (state = { productLists: {} }, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_REQUEST": {
      const newState = {
        loading: true,
        productLists: [],
      };
      return newState;
    }
    case "GET_PRODUCTS_SUCCESS": {
      const newState = {
        loading: false,
        ...state,
        productLists: action.payload,
      };
      return newState;
    }
    case "GET_PRODUCTS_FAILURE": {
      const newState = {
        loading: true,
        error: action.payload,
      };
      return newState;
    }
    default: {
      return state;
    }
  }
};

export const getProductDetailsReducer = (
  state = { singleProductDetail: {} },
  action
) => {
  switch (action.type) {
    case "GET_PRODUCT_DETAILS_REQUEST": {
      const newState = {
        loading: true,
      };
      return newState;
    }
    case "GET_PRODUCT_DETAILS_SUCCESS": {
      const newState = {
        loading: false,
        ...state,
        singleProductDetail: action.payload,
      };
      return newState;
    }
    case "GET_PRODUCT_DETAILS_FAILURE": {
      const newState = {
        loading: false,
        ...state,
        error: action.payload,
      };
      return newState;
    }
    case "GET_PRODUCT_DETAILS_RESET": {
      const newState = {
        ...state,
        singleProductDetail: {},
      };
      return newState;
    }
    default: {
      return state;
    }
  }
};
