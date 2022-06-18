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
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';
import AddSharpIcon from '@mui/icons-material/AddSharp';

import { cyan, green, lightBlue, lime, orange, blue, red } from '@mui/material/colors';

import {
    addProduct,
    incrementQuantity,
    decrementQuantity,
    removeProductFromCart,
    clearCart,
    getTotals,
} from '../features/products/cartSlice';


const Cart = () => {

    const cart = useAppSelector((state) => state.cart);
    const products = useAppSelector((state) => state.products);
    const dispatch = useAppDispatch();
    let navigate = useNavigate();

    if (products.status === 'success') {
        console.log('Success');
    }


    // useEffect(() => {
    //     dispatch(getTotals());
    // }, [cart, dispatch]);

    const handleAddToCart = (product: IProduct) => {
        dispatch(addProduct(product));
    }

    const handleRemoveFromCart = (product: IProduct) => {
        dispatch(removeProductFromCart(product));
    }

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    // const handleDecrementCart = ({ id: string }) => {
    //     dispatch(decrementQuantity(id));
    // }

    // const handleIncrementCart = (id: string) => {
    //     dispatch(incrementQuantity(id));
    // }


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
                <Box sx={{ p: '2px' }} key={item._id}>
                    <Typography variant="h5" key={item._id}>{item.name} - ${item.price}</Typography>
                    <Button onClick={() => handleRemoveFromCart(item)} variant="contained" endIcon={<RemoveSharpIcon />} size="small" sx={{
                        fontWeight: '600', p: '3px', mx: '12px', borderColor: 'lime', background: '#349fda', color: 'white', ':hover': {
                            background: lime[500],
                            color: 'black',
                        }
                    }}></Button>
                    <Button onClick={() => handleAddToCart(item)} variant="contained" endIcon={<AddSharpIcon />} size="small" sx={{
                        mx: '12px',
                        p: '3px',
                        fontWeight: '600',
                        borderColor: 'lime',
                        background: '#349fda',
                        color: 'white'
                    }}></Button>
                </Box >
            ))}
            <Button startIcon={<RemoveShoppingCartIcon />} sx={{ my: '88px', mx: '7px' }} variant="contained" size="medium" onClick={() => handleClearCart()}>Empty Cart</Button>
        </Container >
    );
}


export default Cart;