import { useMemo, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Switch from "@mui/material/Switch";
import AppBar from "@mui/material/AppBar";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Badge, { BadgeProps } from '@mui/material/Badge';
import { useAppSelector } from '../app/hooks';
import { styled } from '@mui/material/styles';

import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { Icon } from "@mui/material";
import { theme } from '../theme';

const pages: Array<{ name: string, path: string }> = [
    {
        name: 'Cart',
        path: '/cart'
    },
    {
        name: 'Signin',
        path: '/signin'
    }
];

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        fontSize: '1.5rem',
        padding: '12rem',
        color: 'white'
    },
}));


const Header = ({ toggleDark, darkMode }: any) => {

    const [checked, setChecked] = useState<boolean>(false);

    const cart = useAppSelector((state) => state.cart);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setChecked(e.target.checked);
    }


    return (
        <>
            <AppBar position="sticky">
                <Container sx={{
                    p: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
                    maxWidth="xl">
                    <Typography
                        variant="h3"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            color: 'inherit',
                            py: 1,
                            letterSpacing: '.3rem',
                            textDecoration: 'none',
                            display: { xs: 'inline-flex' }
                        }}
                    >
                        ProShop
                    </Typography>
                    <Stack sx={{ display: { xs: 'none', md: 'flex' } }} direction="row" spacing={3} alignItems="center" justifyContent="flex-end">
                        <StyledBadge overlap="rectangular" badgeContent={cart.cartTotalQuantity} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} component={Link} to="/cart">
                            <ShoppingCartRoundedIcon sx={{ color: 'white', fontSize: '2.4rem' }} />
                        </StyledBadge>
                        <StyledBadge overlap="circular" component={Link} to="/cart">
                            <LoginRoundedIcon sx={{ color: 'white', fontSize: '2.4rem' }} color='inherit' />
                        </StyledBadge>
                    </Stack>
                </Container>
            </AppBar>
        </>
    );
}

export default Header