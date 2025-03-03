import { use, useState } from "react";
import { createContext } from "react";
import React from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    let existe = cart.some((element) => element.id === product.id);
    if (existe) {
      const nuevoArray = cart.map((element) => {
        if (product.id === element.id) {
          return { ...element, quantity: element.quantity + product.quantity };
        } else {
          return element;
        }
      });
      setCart(nuevoArray);
    } else {
      setCart([...cart, product]);
    }
  };

  const deleteById = (id) => {
    console.log(id);
    const newArray = cart.filter((element) => element.id !== id);
    setCart(newArray);
  };
  const resetCart = () => {
    setCart([]);
  };
  const getTotalAmount = () => {
    let total = cart.reduce((acc, element) => {
      return acc + element.quantity * element.price;
    }, 0);
    return total;
  };
  const getTotalQuantity = () => {
    let total = cart.reduce((acc, element) => {
      return acc + element.quantity;
    }, 0);
    return total;
  };
  let data = {
    cart,
    addToCart,
    deleteById,
    resetCart,
    getTotalAmount,
    getTotalQuantity,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
