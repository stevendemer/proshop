import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import Product from '../components/Product';
import products from '../products';
import { IProduct } from "types";


const Homepage = () => {

    return (
        <Container>
            <Typography fontWeight='bold' sx={{ my: 8, display: 'flex', justifyContent: 'center' }} variant="h2">Latest products</Typography>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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