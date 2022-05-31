import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import Product from '../components/Product';
import { IProduct } from "types";
import axios from "axios";

const baseURL = "http://localhost:5000/api/products";

const Homepage = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await axios.get(baseURL);
                setProducts(data);
            } catch (error) {
                alert(error);
            }
        }
        fetchProducts();
    }, []);

    // console.log(products);


    return (
        <Container>
            <Typography fontWeight='bold' sx={{ my: 8, display: 'flex', justifyContent: 'center' }} variant="h2">Latest products</Typography>
            <Grid className="product-listing" container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {products.map((product) => (
                    <Grid item key={product._id}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );

}


export default Homepage;