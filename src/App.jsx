import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import './index.css'
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/shop' element={<Shop />}/>
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
