// React Hook
import { useReducer, useEffect } from "react";

// Context
import { CartContext } from "./";

// Reducer function
import { cartReducer } from "./";

// Cookies
import Cookies from "js-cookie";

const CART_INITIAL_STATE = {
  cart: [],
  numberOfItems: 0,
  subTotal: 0,
  tax: 0,
  total: 0,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  useEffect(() => {
    try {
      const cookiesProducts = Cookies.get("cart")
        ? JSON.parse(Cookies.get("cart"))
        : [];
      dispatch({
        type: "LoadCart from cookies | storage",
        payload: cookiesProducts,
      });
    } catch (error) {
      dispatch({ type: "LoadCart from cookies | storage", payload: [] });
    }
  }, []);

  useEffect(() => {
    Cookies.set("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  useEffect(() => {
    const numberOfItems = state.cart.reduce(
      (prev, current) => current.quantity + prev,
      0
    );
    const subTotal = state.cart.reduce(
      (prev, current) => current.price * current.quantity + prev,
      0
    );
    const taxRate = Number(process.env.NEXT_PUBLIC_TAX_RATE || 0);

    const orderSummary = {
      numberOfItems,
      subTotal,
      tax: subTotal * taxRate,
      total: subTotal * (taxRate + 1),
    };

    dispatch({ type: "Update order summary", payload: orderSummary });
  }, [state.cart]);

  const addProductToCart = (product) => {
    const productInCart = state.cart.some((p) => p._id === product._id);
    if (!productInCart)
      return dispatch({
        type: "Update products in cart",
        payload: [...state.cart, product],
      });

    const productInCartWithDifferentSize = state.cart.some(
      (p) => p._id === product._id && p.size === product.size
    );
    if (!productInCartWithDifferentSize)
      return dispatch({
        type: "Update products in cart",
        payload: [...state.cart, product],
      });

    // Acumular el producto porque ya existe con esa talla
    const updateProducts = state.cart.map((p) => {
      if (p._id !== product._id) return p;
      if (p.size !== product.size) return p;

      // Actualizar la cantidad
      p.quantity += product.quantity;
      return p;
    });

    dispatch({ type: "Update products in cart", payload: updateProducts });
  };

  const updateCartQuantity = (product) => {
    dispatch({ type: "Change cart quantity", payload: product });
  };

  const removeCartProduct = (product) => {
    dispatch({ type: "Remove product in cart", payload: product });
  };

  const providerObject = {
    ...state,
    addProductToCart,
    updateCartQuantity,
    removeCartProduct,
  };

  return (
    <CartContext.Provider value={providerObject}>
      {children}
    </CartContext.Provider>
  );
};
