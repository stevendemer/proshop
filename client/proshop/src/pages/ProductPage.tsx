import { useEffect, useState } from 'react';
import { Link, Route, useSearchParams, useNavigate, useParams } from "react-router-dom"
import Container from "@mui/material/Container";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { orange, teal, lime, blue, indigo, purple, deepOrange, deepPurple, red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

import { IProduct } from "types";

import axios from 'axios';

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

    const [product, setProduct] = useState<IProduct['product']>({});
    const [inStock, setInStock] = useState(false);

    let { productId } = useParams();

    // const product: IProduct['product'] = products.find((p) => p._id === productId);

    useEffect(() => {

        const fetchProduct = async () => {
            const { data } = await axios.get(`http://localhost:5000/api/products/${productId}`);
            setProduct(data);
        }

        fetchProduct();
    }, []);


    const handleClick = (e: MouseEvent): void => {
        if (product.countInStock > 0) {
            console.log("Success ! You bought it ");
        } else {
            console.log("Failed the product does not exist !")
        }
    }


    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2, backgroundColor: blue[400], width: '100vw', height: '100vh' }} >
            <Paper
                sx={{
                    p: 3,
                    margin: 'auto',
                    maxWidth: '550px',
                    flexGrow: 1,
                    backgroundColor: 'white',
                    color: 'black',
                    borderTopLeftRadius: '45px',
                    borderTopRightRadius: '45px',
                    borderBottomLeftRadius: '25px',
                    borderBottomRightRadius: '25px',
                }}
            >
                <Grid container spacing={3}>
                    <Grid sx={{ m: '22px' }} item>
                        <Img alt="product image" src={product.image} />
                    </Grid>
                    <Grid container direction="column" item xs={12} sx={{ px: '12px' }}>
                        <Grid item xs>
                            <Typography gutterBottom variant="h5" component="div">{product.name}</Typography>
                            <Typography gutterBottom variant="subtitle1" component="div">{product.description}</Typography>
                            <Rating sx={{ my: '12px', mx: '8px' }} value={product.rating || 0} readOnly precision={0.5} />
                            <Typography sx={{ mx: '12px' }} variant="subtitle1">{product.numReviews} reviews</Typography>
                        </Grid>
                    </Grid>
                    <Box sx={{ mx: '25px', my: '12px', display: 'flex' }}>
                        <Button size="small" variant="contained" sx={{
                            backgroundColor: 'theme.primary.main', color: 'white', mx: '12px',
                            ':hover': {
                                backgroundColor: orange[700],
                                color: 'black'
                            }
                        }}>Share</Button>
                        <Button size="small" sx={{
                            ':hover': {
                                backgroundColor: orange[700],
                                color: 'black'
                            }
                        }} variant="contained">Learn more</Button>
                    </Box>
                </Grid>
            </Paper>
            <Stack spacing={2} sx={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '35px', height: '250px', width: 'fit-content', position: 'absolute', right: '25vw', px: '32px', border: '2px solid black',
                backgroundColor: 'white', color: 'black'
            }}>
                <Typography variant="h5" sx={{ width: 'fit-content', cursor: 'pointer' }}>Price: ${product.price}</Typography>
                <Typography variant="subtitle1" sx={{ width: 'fit-content' }}>Status: {product.countInStock > 0 ? "In stock" : "Out of Stock"}</Typography>
                <Button
                    sx={{
                        backgroundColor: 'black',
                        color: 'white',
                        fontSize: '15px',
                        borderRadius: '55px',
                        padding: '11px',
                        ':hover': {
                            backgroundColor: orange[600],
                            color: 'white'
                        }
                    }}
                    onClick={handleClick}
                >ADD TO CART</Button>
            </Stack>
        </Box>
    );
}

export default ProductPage