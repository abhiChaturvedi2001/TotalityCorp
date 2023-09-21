import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Component/Header'
import Home from './Component/Home'
import About from './Component/About'
import Product from './Component/Product'
import ProductPage from './Component/ProductPage'
import CartPage from './Component/CartPage'
import CheckOutPage from "./Component/CheckOutPage"

const App = () => {

  // for cart state
  const [cart, setCart] = useState(0);
  // for cart data
  const [cartData, setCartData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  return (
    <>
      <BrowserRouter>
        <Header cart={cart} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/product' element={<Product />} />
          <Route path='/productpage/:id' element={<ProductPage cart={cart} setCart={setCart} cartData={cartData} setCartData={setCartData} />} />
          <Route path='/cart' element={<CartPage cartData={cartData} setCartData={setCartData} cart={cart} setCart={setCart} totalAmount={totalAmount} setTotalAmount={setTotalAmount} />} />
          <Route path='/cart/checkoutpage' element={<CheckOutPage totalAmount={totalAmount} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App