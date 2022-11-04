import React, { useState } from 'react'
import Navbar from './Navbar'

function AddProduct(item) {


  const[product,setproduct] = useState({title:"",description:"",price:"",img:""});
  const [products,setproducts] = useState([{item}])
  
  const changeProduct=(e)=>{
  setproduct({...product,[e.target.name]:e.target.value})

  
  }

  const addProduct=()=>{
    setproducts([...products,product])
    setproduct({title:"",description:"",price:"",img:""})

  }
  return (
    <>
    <Navbar/>
     <div className='add-form'>
     <form action="">
       
       <input type="text" value={product.title} onChange={changeProduct} placeholder=' Add title' name='title' />
       <input type="text" value={product.description} onChange={changeProduct} placeholder=' Add description' name='description' />
       <input type="text" value={product.price} onChange={changeProduct}placeholder=' Add price' name='price' />
       <input value={product.img} onChange={changeProduct}type="file" />
       <button onClick={ addProduct} >Add </button>

       {/* product to be added {JSON.stringify(product)} */}

   


     </form>

     </div>
     
    </>
   
  )
}

export default AddProduct