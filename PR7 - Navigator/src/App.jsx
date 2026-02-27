import React, { useRef, useState } from 'react';
// import { useEffect } from 'react';
import Navbar from './assets/Components/Navbar'
import {Route, Routes} from "react-router";
import Home from "./assets/Components/Home.jsx";
import AddProduct from "./assets/Components/AddProduct.jsx";
import EditProduct from "./assets/Components/EditProduct.jsx";
function App() {
  const [products, setProducts] = useState({})
  return (
    <>
      <Navbar />
        <Routes>
          <Route path={'/'} element={<Home className={'text-2xl'}/>}/>
          <Route path={'/add-product'} element={<AddProduct className={'text-2xl'}/>}/>
          <Route path={'/edit-product/:i'} element={<EditProduct className={'text-2xl'}/>}/>
        </Routes>
    </>
  )   
}

export default App