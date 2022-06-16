import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import toast from 'react-toastify';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Link, Navigate } from 'react-router-dom';

import {
    addProduct,
    removeProductFromCart,
    clearCart,
    getTotals,

} from '../features/products/cartSlice';
import { IProduct } from '../types';


const Cart = () => {

    const cart = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const handleAddToCart = (product: IProduct) => {
        dispatch(addProduct(product));
    }

    const handleRemoveFromCart = (product: IProduct) => {
        dispatch(removeProduct(product));
    }

    const handleClearCart = () => {
        dispatch(clearCart());
    }


    return (
        <>
            <h2>Shopping Cart</h2>
            {cart.products.length === 0 && <div>The shopping cart is empty !</div>}
            {cart.products.map((item) => (
                <div key={item._id}>The name is {item.name} and the price is {item.price} !</div>
            ))}
            <Button onClick={() => handleClearCart()}>Clear shopping cart</Button>
        </>
    );
}


export default Cart;