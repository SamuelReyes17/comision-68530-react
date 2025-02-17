import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from "@mui/material"
import PersonIcon from '@mui/icons-material/Person';

const CartWidget = () =>{
    return (
        <div className='icons-container'>
            <Badge badgeContent={2} color="secondary" showZero={true}>
                <ShoppingCartIcon/>
            </Badge>
            <PersonIcon/>
        </div>
    )
}

export default CartWidget