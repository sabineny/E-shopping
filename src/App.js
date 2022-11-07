
import './App.css';

import {Routes, Route} from 'react-router-dom'
import AddProduct from './Components/AddProduct';
import Home from './Components/Home';
import { useState } from 'react';
import Cart from './Components/Cart'
import axios from 'axios';

function App() {
  const [show, setShow] = useState(true)
  const [carts, setCarts] = useState([])

  const [data, setData] = useState([]);


  const getproducts = async ()=>{
  const response= await axios.get("https://dummyjson.com/products?limit=6");
  setData(response.data.products);
  }
  if(data.length<1){
  getproducts()};

  return (
    <>
  
  <Cart/>
    
  
    <Routes>
    <Route path='/' element={<Home data={data}/>}/>
    <Route path='/addnewproduct' element={<AddProduct setData={setData} data={data}/>}/>
    </Routes>
  </>
  );
}

export default App;
