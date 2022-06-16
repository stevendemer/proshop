import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

import { cyan, orange, red, blue, lime, lightBlue } from '@mui/material/colors';

import { useAppSelector, useAppDispatch } from '../app/hooks';

import {
    addProduct
} from '../features/products/cartSlice'

interface IProps {
    product: IProduct | undefined;
    children?: React.ReactNode | React.ReactNode[];
}


const ProductCard = ({ product }: IProduct) => {

    const dispatch = useAppDispatch();

    return (
        <Stack sx={{ maxWidth: '100%' }} spacing={3} direction="column" justifyContent="space-between" alignItems="center">
            <Paper variant="outlined" sx={{
                background: cyan[500],
                color: 'white',
                mx: '25px',

            }}>
                <CardMedia component="img" width="120px" height="220px" image={product.image} alt="product image" />
                <Link style={{ textDecoration: 'none', color: 'white' }} href={`/product/${product._id}`}>
                    <Typography sx={{ px: '9px' }} variant="body1">{product.name}</Typography>
                </Link>
                <Typography sx={{ mx: '8px', my: '22px' }} variant="subtitle1"> $ {product.price}</Typography>
                <Button onClick={() => dispatch(addProduct(product))} size="small" variant="contained" sx={{
                    m: '12px',
                    color: 'black',
                    background: lime[500],
                    ':hover': {
                        background: orange[600],
                        color: 'black'
                    }
                }}>Add to cart</Button>
            </Paper>
        </Stack >
    );

}


export default ProductCard;