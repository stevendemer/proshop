import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import toast from 'react-toastify';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// TODO: Add a Go back button when the cart is empty 
import {
    addProduct,
    removeProductFromCart,
    clearCart,
    getTotals,

} from '../features/products/cartSlice';


const Cart = () => {

    const cart = useAppSelector((state) => state.cart);
    const prod = useAppSelector((state) => state.product);
    const dispatch = useAppDispatch();
    let navigate = useNavigate();

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const handleAddToCart = (product: IProduct) => {
        dispatch(addProduct(product));
    }

    const handleRemoveFromCart = (product: IProduct) => {
        dispatch(removeProductFromCart(product));
    }

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    if (cart.products.length === 0) {
        return (
            <Container sx={{ my: '5rem', mx: '12rem' }}>
                <Typography variant="h4">The shopping cart is empty !</Typography>
                <Button startIcon={<ArrowBackIcon />} sx={{ my: '120px', display: 'flex', justify: 'center' }} variant="contained" onClick={() => navigate("/")}>Go back</Button>
            </Container>
        );
    }

    return (
        <Container sx={{
            my: '120px',
        }}>
            <Typography variant="h4">You have {cart.cartTotalQuantity} total products in your cart</Typography>
            {cart.products.map((item) => (
                <Typography variant="h5" key={item._id}>{item.name} - ${item.price}</Typography>
            ))}
            <Button startIcon={<RemoveShoppingCartIcon />} sx={{ p: '8px', m: '12px' }} variant="contained" size="medium" onClick={() => handleClearCart()}>Empty Cart</Button>
        </Container>
    );
}


export default Cart;