import React, { useContext, createContext, useState } from "react";
import { Context } from "urql";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
  // Add our state
  const [qty, setQty] = useState(1);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // State functions
  // Increase product qty
  const increaseQty = () => {
    setQty((prevQty) => prevQty + 1);
  };
  // Decrease product qty
  const decreaseQty = () => {
    setQty((prevQty) => {
      return prevQty - 1 < 1 ? 1 : prevQty - 1;
    });
  };

  return (
    <ShopContext.Provider
      value={{ qty, increaseQty, decreaseQty, showCart, setShowCart }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShopContext = () => useContext(ShopContext);
