import Header from './components/Header';
import Footer from './components/Footer';

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Homepage from './pages/Homepage';
import products from 'products';

function App() {

  return (
    <>
      <Header />
      <main>
        <Homepage />
      </main>
      <Footer />
    </>
  )
}

export default App
