import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const pages: Array<{ name: string, path: string, icon: React.ReactNode }> = [
    {
        name: 'Cart',
        path: '/cart',
        icon: <ShoppingCartIcon />
    },
    {
        name: 'Signin',
        path: '/signin',
        icon: <LoginIcon />
    }
];

const Header = () => {
    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl" sx={{ display: 'flex', justify: 'space-between', alignItems: 'center' }}>
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
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex', justifyContent: 'flex-end', alignItems: 'baseline' },
                        }}
                    >
                        {pages.map((page) => (
                            <IconButton aria-label="pages" key={page} sx={{ mx: 4, fontSize: 20, display: 'block' }}>
                                {page.icon}
                                <Link style={{ color: 'white', textDecoration: "none" }} to={page.path}>{page.name}</Link>
                            </IconButton>
                        ))}
                    </Box>
                </Container>
            </AppBar>
        </>
    );
}

export default Header