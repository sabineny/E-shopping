import React, { useState } from 'react'
import Navbar from './Navbar'
// import list from '../data'
import Cards from './Cards'
import axios from 'axios'
import AddProduct from './AddProduct';
import Cart from './Cart'


function Home(props) {

  const [show, setShow] = useState(true)
  const [carts, setCarts] = useState([])
  

  return (
    <>
    <Navbar  />

     <section>
      {
       props.data.map((item,index) =>(
        <Cards products key={index} item={item}/>
       ))
       }
     </section>
     
     </>
   

  )
}

export default Home