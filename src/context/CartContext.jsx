import { use, useState } from "react";
import { createContext } from "react";
import React from 'react'

export const CartContext = createContext()



const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const addToCart = ( product ) => {
        /*console.log(product.title)*/
    }
    const deleteById = () => {}
    const resetCard = () => {}




    let data = {
        cart,
        addToCart,
        deleteById,
        resetCard
    }

  return (
   <CartContext.Provider value={data}>{children}</CartContext.Provider>
  )
}

export default CartContextProvider