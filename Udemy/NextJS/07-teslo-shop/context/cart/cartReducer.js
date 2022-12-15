export const cartReducer = (state, action) => {
  switch (action.type) {
    case "LoadCart from cookies | storage":
      return {
        ...state,
        isLoaded: true,
        cart: [...action.payload],
      };
    case "Update products in cart":
      return { ...state, cart: [...action.payload] };
    case "Change cart quantity":
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (product._id !== action.payload._id) return product;
          if (product.size !== action.payload.size) return product;

          return action.payload;
        }),
      };
    case "Remove product in cart":
      return {
        ...state,
        cart: state.cart.filter((product) => {
          return !(
            product._id === action.payload._id &&
            product.size === action.payload.size
          );
        }),
      };
    case "Update order summary":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
