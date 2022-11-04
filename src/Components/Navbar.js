import React from 'react'
import{Link} from 'react-router-dom'

function Navbar({size}) {
  return (
    <>
  <nav>
    <div className="nav-box">
    <span className='shopping'>
       <h2>E-shopping</h2> 
    </span>
    <div className="links">
      <span>{size}</span>
      <Link to="/">In Cart</Link> 
       
      <Link to="/"> home</Link>
      <Link to="/addnewproduct"> Add new product</Link>
     
    </div>
    </div>
  </nav>


    </>
  )
}

export default Navbar