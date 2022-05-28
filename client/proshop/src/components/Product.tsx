import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { CardHeader } from "@mui/material";
import Rating from './Rating';
import { IProduct } from '../types';
import React from "react";

const Product = ({ product }: IProduct) => {

    return (
        <>
            <Card sx={{ display: 'block', m: '3rem', p: '2rem', borderRadius: '55px', maxWidth: '350px', border: '3px solid black' }}>
                <Link style={{ textDecoration: 'none', color: 'black' }} href={`/product/${product._id}`}>
                    <CardMedia component="img" width="360" height="200" alt="product image" image={`${product.image}`} />
                    <Typography variant="h5">{product.name}</Typography>
                </Link>
                <Link href={`/product/${product._id}`} />
                <CardContent component={'div'}>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                </CardContent>
                <CardContent component={'div'}>
                    <Typography variant='h5'>${product.price}</Typography>
                </CardContent>
            </Card>
        </>
    );
}

export default Product