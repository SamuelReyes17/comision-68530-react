import { useEffect, useState } from "react"
import { products } from "../../../products"
import ProductCard from "../../common/productCard/ProductCard"
import { useParams } from "react-router"

const Productos = () => {
    let { name } = useParams()
    const [items, setItems] = useState([])
    console.log(useParams())
    useEffect(() =>{
       
        let arrayFiltrado;
        if(name) {
            arrayFiltrado = products.filter(product => product.category === name)
        } 
        const getProducts = new Promise ((resolve, reject) => {
            let permiso = true
                if(permiso) {
                    resolve(name ? arrayFiltrado: products)
                } else {
                    reject({status: 400,message: "error algo salio mal"})
                } 
       
    })
    getProducts
    .then((res) => {
    setItems(res)
    })
    .catch ((err) => {
    console.log(err)
    })
    },[name])

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "5rem"
        }}>
            {
                items.map((item) => {
                    return (
                      <ProductCard 
                      key={item.id} 
                      id={item.id} 
                      price={item.price} 
                      title={item.title} 
                      description={item.description} 
                      stock={item.stock} 
                      imageUrl={item.imageUrl}/>
                    )
                })
            }
        </div>
    )
}

export default Productos


