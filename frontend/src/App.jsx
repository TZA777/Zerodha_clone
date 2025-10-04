import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./landing_page/home/Home.jsx" 
import About from "./landing_page/about/About.jsx"
import Signup from "./landing_page/signup/Signup.jsx"
import Product from "./landing_page/product/Product.jsx"
import Pricing from "./landing_page/pricing/Pricing.jsx"
import Support from "./landing_page/support/Support.jsx"


function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/product" element={<Product />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/support" element={<Support />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
    </BrowserRouter>
     
      
    </>
  )
}

export default App
