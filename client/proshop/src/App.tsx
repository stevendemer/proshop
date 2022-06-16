import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from './components/Cart';
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { CssBaseline, ThemeProvider } from "@mui/material";

import Homepage from './pages/Homepage';
import ProductPage from './pages/ProductPage';
import { toast, ToastContainer } from 'react-toastify';

import products from 'products';

import { IconContext } from 'react-icons';

import { Provider } from 'react-redux';
import { store } from './app/store';
import 'react-toastify/dist/ReactToastify.css'

import { useGetAllProductsQuery } from './features/services/productsAPI';

function App() {


  return (
    <Provider store={store}>
      <ToastContainer />
      <IconContext.Provider value={{ color: '#efcc00', size: '28px' }}>
        <Router>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/product/:productId" element={<ProductPage />} />
              <Route path="/" element={<Homepage />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
        </Router>
      </IconContext.Provider>
    </Provider>
  );
}

export default App
