import { useEffect } from 'react';
import { Link, Route, useSearchParams, useNavigate, useParams } from "react-router-dom"
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Rating from '../components/Rating';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from '@mui/material/CardActions';
import Card from "@mui/material/Card";
import CardMedia from '@mui/material/CardMedia';
import CardContent from "@mui/material/CardContent";
import ImageList from "@mui/material/ImageList"
import Grid from "@mui/material/Grid";
import ImageListItem from "@mui/material/ImageListItem";
import Icon from "@mui/material/Icon";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { FaHome } from 'react-icons/fa';

import { IProduct } from "types";
import products from "../products";

interface RouteParams {
    slug: string;
}

const ProductPage = () => {

    let { productId } = useParams();

    const product: IProduct['product'] = products.find((p) => p._id === productId);

    return (
        <>
            <Button component={Link} sx={{ color: 'black', m: '2rem' }} to="/"><ArrowBackIosNewIcon fontSize="large" /></Button>
            {/* <Link style={{ margin: '10rem', paddingTop: '120px' }} to="/">Go back</Link> */}
            <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="product image"
                        height="220"
                        width="360"
                        image={product.image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            {product.name}
                        </Typography>
                        <Typography gutterBottom variant="body1">{product.description}</Typography>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="medium">Learn more</Button>
                    </CardActions>
                </Card>
            </Container>
        </>
    );
}

export default ProductPage