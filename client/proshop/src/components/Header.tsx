import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { Icon } from "@mui/material";

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

const Header = () => {
    return (
        <>
            <AppBar position="static">
                <Container sx={{
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
                            py: 3,
                            letterSpacing: '.3rem',
                            textDecoration: 'none',
                        }}
                    >
                        ProShop
                    </Typography>
                    <Stack direction="row" spacing={3} alignItems="center" justifyContent="flex-end">
                        <ShoppingCartRoundedIcon color='inherit' /><Link sx={{ color: 'white', fontSize: 25, textDecoration: 'none' }} href="/cart">Cart</Link>
                        <LoginRoundedIcon color='inherit' /><Link sx={{ color: 'white', fontSize: 25, textDecoration: 'none' }} href="/signin">Sign in</Link>
                    </Stack>
                </Container>
            </AppBar>
        </>
    );
}

export default Header