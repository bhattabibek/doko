import {Routes,Route} from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';


function App() {


  return (
    <>
   <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/product/:id" element={<ProductDetails/>}/>
      <Route path="/products" element={<Products/>}/>
    </Routes>
   </div>
    </>
  )
}

export default App
