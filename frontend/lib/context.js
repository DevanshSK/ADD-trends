import React, { useContext, createContext, useState } from "react";
import { Context } from "urql";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
  // Add our state
  const [qty, setQty] = useState(1);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

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

  // Add product to cart
  const onAdd = (product, quantity) => {
    //Increase total price
    setTotalPrice((prevTotal) => prevTotal + product.price * quantity);
    // Increase totalQuantities
    setTotalQuantities((prevTotal) => prevTotal + quantity);
    // Check if the product is already is in the cart
    const exist = cartItems.find((item) => item.slug === product.slug);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
    }
  };

  // Remove items
  const onRemove = (product) => {
    //Devrease total price
    setTotalPrice((prevTotal) => prevTotal - product.price);
    // Decreses totalQuantities
    setTotalQuantities((prevTotal) => prevTotal - 1);
    // Check if the product is already is in the cart
    const exist = cartItems.find((item) => item.slug === product.slug);
    if (exist.quantity == 1) {
      setCartItems(cartItems.filter((item) => item.slug !== product.slug));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <ShopContext.Provider
      value={{
        qty,
        increaseQty,
        decreaseQty,
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        onAdd,
        onRemove,
        totalQuantities,
        totalPrice,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
