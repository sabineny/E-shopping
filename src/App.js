
import './App.css';

import {Routes, Route} from 'react-router-dom'
import AddProduct from './Components/AddProduct';
import Home from './Components/Home';
import { useState } from 'react';
import Cart from './Components/Cart'

function App() {
  const [show, setShow] = useState(true)
  const [carts, setCarts] = useState([])
  return (
    <>
  
  <Cart/>
    
  
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/addnewproduct' element={<AddProduct/>}/>
    </Routes>
  </>
  );
}

export default App;
