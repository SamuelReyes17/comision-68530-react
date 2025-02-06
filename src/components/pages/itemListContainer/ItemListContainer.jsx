import { useEffect, useState } from "react"
import { products } from "../../../products"
import ProductCard from "../../common/productCard/ProductCard"

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
                      <ProductCard key={item.id} price={item.price} 
                      title={item.title} description={item.description} 
                      stock={item.stock} imageUrl={item.imageUrl}/>
                    )
                })
            }
        </div>
    )
}

export default Productos