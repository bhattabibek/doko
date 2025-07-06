import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';
import Navbar from './components/Navbar';
import MyOrders from './components/MyOrders';

function App() {
  const location = useLocation();
  const isSellerPath = location.pathname.includes('seller');

  return (
    <>
      {!isSellerPath && <Navbar />}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="my-orders" element={<MyOrders />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
