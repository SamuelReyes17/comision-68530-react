const ProductCard = ({price, title, description, stock, imageUrl}) => {
    return (
        <div style={{ border: "2px solid black"}}>
            <h4>{title}</h4>
            <h4>{description}</h4>
            <h4>{price}</h4>
            <h4>{stock}</h4>
            <img src={imageUrl}/>
        </div>  
    )
}

export default ProductCard