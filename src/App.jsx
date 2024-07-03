import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Gallery1 from './components/Gallery1';
import Product from './components/Product';
import Shop from './pages/Shop';
import About from './pages/About'
import Contact from './pages/Contact'
import Inspirations from './components/Inspirations';
import Gallery2 from './components/Gallery2';
import Footer from './components/Footer';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './pages/Checkout';
import ProductComparasion from './pages/ProductComparison';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Header />
            <Gallery1 />
            <Product />
            <Inspirations />
            <Gallery2 />
            <Footer />
          </>
        } />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/productcomparasion" element={<ProductComparasion />} />
      </Routes>
    </Router>
  );
}

export default App;
