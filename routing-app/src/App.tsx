import React from 'react'
import Login from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import ContactUs from './components/ContactUs'
import Catalog from './components/Catalog'

export default function App() {
  return (
    <div>
    <BrowserRouter>
    
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route  path="/cat" element={<Catalog/>}  />
<Route  path="/home" element={<Home/>} />
<Route  path="/prd" element={<Products/>} />
<Route  path="/contact" element={<ContactUs/>} />

    </Routes>
    
    
    
    </BrowserRouter>  
    </div>
  )
}
