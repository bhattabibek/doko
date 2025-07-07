import { Routes, Route, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';
import Navbar from './components/Navbar';
import MyOrders from './components/MyOrders';
import Auth from './models/Auth';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
  const { Isseller, showUserLogin } = useContext(AppContext);
  const location = useLocation();
  const isSellerPath = location.pathname.includes('seller');

  return (
    <>
      {!isSellerPath && <Navbar />}
      
      {/* Show Auth modal if showUserLogin is true */}
      {showUserLogin && <Auth />}
    <Toaster/>
      <div className='px-6 md:16 lgL:24 xl:px-32'>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/my-orders" element={<MyOrders />} />
        </Routes>
        {/* {isSellerPath ? null : <Footer/>} */}
      </div>
    </>
  );
}

export default App;
