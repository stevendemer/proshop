import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import Product from '../components/Product';
import { IProduct } from "types";
import axios from "axios";
import { cyan, indigo, red, blue } from '@mui/material/colors';
import Spinner from "../components/Spinner";
import ProductCard from '../components/ProductCard';
import { useAppDispatch, useAppSelector } from '../app/hooks';

import { toast } from 'react-toastify';

import { useGetAllProductsQuery, useGetProductIDQuery } from '../features/services/productsAPI';

const Homepage = () => {

    const [products, setProducts] = useState([]);

    const { data, error, isLoading } = useGetAllProductsQuery();

    const notify = () => {
        toast("Hello Geeks", { position: toast.POSITION.BOTTOM_CENTER });
    }

    if (isLoading) {
        return <Spinner />
    }

    if (data) {
        console.log(data);
    }

    return (
        data ? (
            <Container>
                <Typography fontWeight='400' sx={{ my: 3, display: 'flex', color: indigo[700], justifyContent: 'center' }} variant="h2">Latest products</Typography>
                <Grid className="product-listing" container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                    {data.map((product: IProduct) => (
                        <Grid item key={product._id}>
                            <ProductCard product={product} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        ) :
            (
                <div>Error loading products !</div>
            )
    );

}


export default Homepage;