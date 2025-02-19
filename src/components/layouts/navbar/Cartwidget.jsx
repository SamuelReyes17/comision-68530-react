import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from "@mui/material"
import PersonIcon from '@mui/icons-material/Person';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

const CartWidget = () =>{

    
    const { cart } = useContext(CartContext)
    return (
        <div className='icons-container'>
            <Badge badgeContent={cart.length} color="secondary" showZero={true}>
                <ShoppingCartIcon/>
            </Badge>
            <PersonIcon/>
        </div>
    )
}

export default CartWidget