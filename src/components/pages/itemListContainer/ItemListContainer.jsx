import { useEffect, useState } from "react"
import { products } from "../../../products"

const Productos = () => {
const [items, setItems] = useState([])

useEffect(() =>{
    const getProducts = new Promise ((resolve, reject) => {
        let permiso = true
        if(permiso) {
            resolve(products)
        } else {
            reject(400, "error algo salio mal")
        } 
       
    })
    getProducts
    .then((res) => {
    setItems(res)
    })
    .catch ((err) => {
    console.log(err)
    })
    },[])

    console.log(items)

    return (
        <div>
            <h2>Aca van a ir los productos</h2>
            {
                items.map((item) => {
                    return (
                        <div style={{ border: "2px solid black"}}>
                            <h4>{item.title}</h4>
                            <h4>{item.description}</h4>
                            <h4>{item.imageUrl}</h4>
                            <h4>{item.price}</h4>
                        </div>  
                    )
                })
            }
        </div>
    )
}

export default Productos