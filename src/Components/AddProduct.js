import React, { useState } from 'react'
import Navbar from './Navbar'

function AddProduct(props) {


  const[product,setproduct] = useState({title:"",description:"",price:"",thumbnail:""});
  // const [products,setproducts] = useState([{item}])
  
  const changeProduct=(e)=>{
  setproduct({...product,[e.target.name]:e.target.value})

  
  }

  const addProduct=()=>{
    props.setData([...props.data,product])
    setproduct({title:"",description:"",price:"",thumbnail:""})

  }
  return (
    <>
    <Navbar/>
     <div className='add-form'>
     
       <div className="formm">
       <input type="text" value={product.title} onChange={changeProduct} placeholder=' Add title' name='title' />
       <input type="text" value={product.description} onChange={changeProduct} placeholder=' Add description' name='description' />
       <input type="text" value={product.price} onChange={changeProduct}placeholder=' Add price' name='price' />
       <input type="text" value={product.thumbnail} onChange={changeProduct}placeholder=' url' name='thumbnail' />
       </div>
       {/* <input value={product.thumbnail} onChange={changeProduct}type="file" /> */}
       <button onClick={ addProduct} >Add </button>

       {/* product to be added {JSON.stringify(product)} */}

   


    

     </div>
     
    </>
   
  )
}

export default AddProduct