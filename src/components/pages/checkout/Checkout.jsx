import React, { useContext, useState } from "react";
import "./checkout.css";
import Cart from "../cart/Cart";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";

export const Checkout = () => {
  const { cart, getTotalAmount, resetCart } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    nombre: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null);

  const handleSumbit = (evento) => {
    evento.preventDefault();
    setIsLoading(true);

    let total = getTotalAmount();
    let order = {
      buyer: user,
      items: cart,
      total: total,
    };

    let refCollection = collection(db, "orders");
    const promiseResponse = addDoc(refCollection, order);
    promiseResponse
      .then((res) => {
        setOrderId(res.id);
        resetCart();
        setIsLoading(false);
      })
      .catch((error) => console.log({ error }));

    let productsCollection = collection(db, "products");
    order.items.forEach((item) => {
      let productRef = (productsCollection, item.id);
      updateDoc(productRef, { stock: item.stock - item.quantity });
    });
  };

  const handleChange = (evento) => {
    const { value, name } = evento.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="checkout-container">
      {orderId ? (
        <h2>Gracias por tu compra tu ticket es: {orderId}</h2>
      ) : (
        <form onSubmit={handleSumbit}>
          <input
            type="text"
            placeholder="nombre"
            name="nombre"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="email"
            name="email"
            onChange={handleChange}
          />
          <button>Buy</button>
        </form>
      )}
      {isLoading && <h2>Cargando...</h2>}
    </div>
  );
};
