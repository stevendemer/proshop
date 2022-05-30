import { useMemo, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { CssBaseline, ThemeProvider } from "@mui/material";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Homepage from './pages/Homepage';
import ProductPage from './pages/ProductPage';
import theme from './theme';

import products from 'products';

import { IconContext } from 'react-icons';
import { palette } from '@mui/system';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);


  return (
    <IconContext.Provider value={{ color: '#efcc00', size: '28px' }}>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/" element={<Homepage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </IconContext.Provider>
  )
}

export default App
