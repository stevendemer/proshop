import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import theme from './theme';
import { createTheme } from "@mui/material/styles";
import { CssBaseline, ThemeProvider } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
)
