const initialState = {
  cartItems: [],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const item = action.payload;
      const existItem = state.cartItems.find(
        (product) => product.id === item.id
      );
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((product) =>
            product.id === existItem.id ? item : product
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    }
    case "REMOVE_FROM_CART": {
      // all them items are added in the cart which are not equal to the payload id with filter method
      const newState = {
        ...state,
        cartItems: state.cartItems.filter(
          (product) => product.id !== action.payload
        ),
      };
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
