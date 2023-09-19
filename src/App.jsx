import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Component/Header'
import Home from './Component/Home'
import About from './Component/About'
import Product from './Component/Product'
import ProductPage from './Component/ProductPage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/product' element={<Product />} />
          <Route path='/productpage/:id' element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App