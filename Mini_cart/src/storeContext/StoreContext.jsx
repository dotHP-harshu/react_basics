import { createContext, useReducer } from "react";
import { initialState, reducer } from "../reducer/storeReducer";

export const storeContext = createContext();

export function StoreContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product) => {
    const updatedCart = state.productsInCart;
    updatedCart.push(product);
    updatePrice(updatedCart);

    dispatch({ type: "updateProducts", payload: updatedCart });
  };

  const removeFromCart = (product) => {
    let updatedCart = state.productsInCart;
    updatedCart = updatedCart.filter((p) => {
      return p.id != product.id;
    });

    updatePrice(updatedCart);
    dispatch({ type: "updateProducts", payload: updatedCart });
  };

  const updatePrice = (products) => {
    let total = 0;
    products.forEach((product) => {
      total += product.price;
    });

    dispatch({ type: "updatePrice", payload: total });
  };
  const value = {
    totalPrice: state.totalPrice,
    productsInCart: state.productsInCart,
    addToCart,
    removeFromCart,
  };

  return (
    <storeContext.Provider value={value}>{children}</storeContext.Provider>
  );
}
