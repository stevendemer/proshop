import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import theme from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Signin from './pages/Signin';
import Cart from './pages/Cart';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <Router>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </React.StrictMode>
    </Router>
  </ThemeProvider>
)
