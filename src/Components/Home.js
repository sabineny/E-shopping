import React, { useState } from 'react'
import Navbar from './Navbar'
// import list from '../data'
import Cards from './Cards'
import axios from 'axios'
import AddProduct from './AddProduct';
import Cart from './Cart'


function Home() {

  const [show, setShow] = useState(true)
  const [carts, setCarts] = useState([])
  const [data, setData] = useState([]);


  const getproducts = async ()=>{
  const response= await axios.get("https://dummyjson.com/products?limit=12");
  setData(response.data.products);
  }
  if(data.length<1){
  getproducts()};


  return (
    <>
    <Navbar  />

     <section>
      {
       data.map((item,index) =>(
        <Cards products key={index} item={item}/>
       ))
       }
     </section>
     
     </>
   

  )
}

export default Home