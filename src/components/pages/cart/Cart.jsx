import React, { useContext } from "react";
import { Link } from "react-router";
import { Button } from "@mui/material";
import { CartContext } from "../../../context/CartContext";
import "./cart.css";
import Swal from "sweetalert2";
import { toast } from "sonner";

const Cart = () => {
  const { resetCart, cart, deleteById, getTotalAmount } =
    useContext(CartContext);

  let total = getTotalAmount();
  const resetCartWithAlert = () => {
    Swal.fire({
      title: "Seguro quieres vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, vaciar",
      denyButtonText: `No, quiero comprar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        resetCart();
        Swal.fire({
          title: "Carrito vaciado con exito",
          showDenyButton: false,
          showCancelButton: false,
          confirmButtonText: "Ok",
          icon: "success",
        });
      } else if (result.isDenied) {
        Swal.fire({
          title: "No te olvides de tus productos",
          showDenyButton: false,
          showCancelButton: false,
          confirmButtonText: "Ok",
          icon: "info",
        });
      }
    });
  };

  return (
    <div className="cart-container">
      {cart.map((element) => {
        return (
          <div key={element.id} className="cart-item">
            <h2>{element.title}</h2>
            <h2>Cantidad: {element.quantity}</h2>
            <h2>Cantidad: {element.price}</h2>
            <Button
              variant="text"
              onClick={() => {
                deleteById(element.id);
                toast.warning("El prodcuto fue eliminado");
              }}
            >
              Eliminar
            </Button>
          </div>
        );
      })}

      {cart.length > 0 ? (
        <h2>El total a pagar es: {total}</h2>
      ) : (
        <h2>El carrito esta vacio</h2>
      )}
      <div className="cart-footer">
        <Button variant="outlined" color="error" onClick={resetCartWithAlert}>
          Vaciar carrito
        </Button>
        <Button variant="outlined" color="error">
          <Link to={"/checkout"}>FInalizar Compra</Link>
        </Button>
      </div>
    </div>
  );
};

export default Cart;
