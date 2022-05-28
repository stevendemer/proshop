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

    const [checked, setChecked] = useState<boolean>(false);
    const [darkMode, setDarkMode] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setChecked(e.target.checked);
    }

    const toggleMode = () => setDarkMode(!darkMode);

    return (
        <>
            <AppBar position="static">
                <Switch
                    sx={{ color: 'green', backgroundColor: 'yellow' }}
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controller' }}
                />
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
                        <ShoppingCartRoundedIcon color='inherit' /><Button component={Link} style={{ color: 'white', fontSize: 20, textDecoration: 'none' }} to="/cart">Cart</Button>
                        <LoginRoundedIcon color='inherit' /><Button component={Link} style={{ color: 'white', fontSize: 20, textDecoration: 'none' }} to="/signin">Sign in</Button>
                    </Stack>
                </Container>
            </AppBar>
        </>
    );
}

export default Header