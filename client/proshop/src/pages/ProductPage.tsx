import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom"
import { orange, cyan, teal, lime, blue, indigo, purple, deepOrange, deepPurple, red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { useGetProductIDQuery } from '../features/services/productsAPI';
import { Box, Container, Grid, Stack, Card, CardContent, CardMedia, Button, Typography, Paper } from '@mui/material';
import Spinner from '../components/Spinner';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { store } from '../app/store';

import {
    addProduct,
} from '../features/products/cartSlice';


interface RouteParams {
    slug: string;
}

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const ProductPage = () => {

    const [product, setProduct] = useState<IProduct['product']>();
    const [inStock, setInStock] = useState(false);

    const dispatch = useAppDispatch();

    const cart = useAppSelector((state) => state.cart);

    let { productId } = useParams();

    const { data, error, isLoading } = useGetProductIDQuery(productId);

    useEffect(() => {

        if (data) {
            setProduct(data);
            console.log(data);
        } else if (error) {
            return <div>Error with the product !</div>
        }

    }, [data]);

    const handleClick = (e: React.SyntheticEvent): void => {
        if (product.countInStock > 0) {
            console.log("Success ! You bought it ");
        } else {
            console.log("Failed the product does not exist !")
        }
    }


    const handleAddToCart = (product: IProduct) => {
        dispatch(addProduct(product));
    }

    return (
        product ? (

            <Box sx={{ display: 'flex', justify: 'space-around', align: 'center', background: blue[400], width: '100vw', height: '100vh' }} >
                <Paper
                    sx={{
                        p: 1,
                        margin: 'auto',
                        maxWidth: '550px',
                        borderTopLeftRadius: '45px',
                        borderTopRightRadius: '45px',
                        borderBottomLeftRadius: '45px',
                        borderBottomRightRadius: '45px',
                    }}
                >
                    <Grid direction="row" container spacing={3}>
                        <Grid sx={{ m: '12px' }} item>
                            <Img alt="product image" src={product.image} />
                        </Grid>
                    </Grid>
                    <Grid sx={{ display: 'flex' }} item xs>
                        <Box sx={{ mx: '12px', my: '5px' }}>
                            <Button size="small" variant="contained" sx={{
                                backgroundColor: red[600], color: 'white', mx: '12px',
                                fontWeight: '550',
                                ':hover': {
                                    backgroundColor: lime[400],
                                    color: 'black'
                                }
                            }}>Share</Button>
                            <Button size="small" sx={{
                                background: red[600],
                                fontWeight: '550',
                                ':hover': {
                                    backgroundColor: lime[400],
                                    color: 'black'
                                }
                            }} variant="contained">Learn more</Button>
                        </Box>
                    </Grid>
                    <Container>
                        <Box>
                            <Typography variant="h5" sx={{ cursor: 'pointer' }}>Price: ${product.price}</Typography>
                            <Typography variant="subtitle1" sx={{ fontSize: '1.1rem', height: '55px', fontWeight: '700' }}>Status: {product.countInStock > 0 ? "In stock" : "Out of Stock"}</Typography>
                            <Typography variant="subtitle1">{product.description}</Typography>
                            <Button
                                sx={{
                                    backgroundColor: 'black',
                                    mx: '-12px',
                                    my: '45px',
                                    color: 'white',
                                    fontSize: '15px',
                                    borderRadius: '55px',
                                    padding: '11px',
                                    ':hover': {
                                        backgroundColor: orange[600],
                                        color: 'white'
                                    }
                                }}
                                onClick={() => dispatch(addProduct(product))}>
                                Add to Cart
                            </Button>
                        </Box>
                    </Container>
                </Paper>
            </Box >
        ) : (isLoading ? <Spinner /> : <h2>Error !</h2>)
    );
}

export default ProductPage;