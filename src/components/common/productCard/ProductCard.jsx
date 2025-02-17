import { Button } from "@mui/material"
import { Link } from "react-router"

const ProductCard = ({price, title, description, stock, imageUrl, id}) => {
    return (
        <div style={{marginTop: "1.5rem", marginBottom: "1.5rem", width: "23rem", padding: "20px",
        borderRadius: "12px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", background: "#fff",textAlign: "center"}}>
            <img src={imageUrl} style={{width: "18rem", height: "18rem"}}/>
            <h4 style={{fontSize: "1.5rem",   margin: "20px 0"}}>{title}</h4>
            <h4 style={{fontSize: "1rem", margin: "20px 0"}}>{description}</h4>
            <h4>{price}</h4>
            <h4 style={{fontSize: "0.9rem", margin: "20px 0"}}>{stock}</h4>
            <Link to={`/itemDetail/${id}`}>
                <Button variant="outlined" disabled={stock < 1}>Details</Button>
            </Link>
        </div>  
    )
}

export default ProductCard