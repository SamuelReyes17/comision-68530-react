import React, { useState } from "react";
import "./checkout.css";

export const Checkout = () => {
  const [user, setUser] = useState({
    nombre: "",
    email: "",
  });

  const handleSumbit = (evento) => {
    evento.preventDefault();
    console.log(user);
  };

  const handleChange = (evento) => {
    const { value, name } = evento.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="checkout-container">
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
    </div>
  );
};
