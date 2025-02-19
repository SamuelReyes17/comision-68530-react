import React, { useContext } from 'react'
import { useState } from 'react'
import { CartContext } from '../../../context/CartContext'
import { Button } from "@mui/material"
import './counter.css'

const Counter = ({item}) => {
    const [contador, setContador] = useState(1)
    const { addToCart } = useContext(CartContext)

    const sumar = () => {
        if(contador < item.stock) {
            setContador(contador + 1)
        } else {
            alert("Stock maximo!")
        }
    }
    const restar = () => {
        if(contador > 1) {
            setContador(contador - 1)
        } else {
            alert("Min 1 producto")
        }
    }
    const onAdd = () =>{
        addToCart()
        console.log("agergar al carrito")
        let objetoParaElCarrito = {...item, quantity: contador}
        console.log(objetoParaElCarrito)
    }
  return (
    <div>
        <div className='container'>
            <button className='minimal-button' onClick={sumar}>+</button>
            <h1>{contador}</h1>
            <button className='minimal-button'  onClick={restar}>-</button>
        </div>
        <Button onClick={onAdd} variant='outlined' color='error'>Agregar al carrito</Button>
    </div>
  )
}

export default Counter