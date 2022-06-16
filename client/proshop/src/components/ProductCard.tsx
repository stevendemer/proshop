import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

import { cyan, indigo, red, blue } from '@mui/material/colors';
import { IProduct } from '../types';

import { useAppSelector } from '../app/hooks';

interface IProps {
    product: IProduct | undefined;
    children?: React.ReactNode | React.ReactNode[];
}


const ProductCard = ({ product }: IProduct) => {

    return (

        <Box sx={{
            display: 'flex', justify: 'center', align: 'center', direction: 'row', mx: '240px'
        }}>
            <Card sx={{ display: 'flex', width: '55vw', justify: 'space-between', align: 'center', background: cyan[500], color: 'white', borderRadius: '55px' }}>
                <CardContent>
                    <Link style={{ textDecoration: 'none', color: 'white' }} href={`/product/${product._id}`}>
                        <Avatar alt="product image" src={product.image} sx={{ width: '8vw', height: '12vh', borderRadius: '33px' }} />
                        <Typography variant="h4">{product.name}</Typography>
                    </Link>
                    <Typography variant="subtitle1">Price ${product.price}</Typography>
                </CardContent>
            </Card >
        </Box>
    );
}


export default ProductCard;