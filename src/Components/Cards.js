import React from 'react'

function Cards({item}) {
    const { title, description, price,thumbnail,category,}=item;
  return (
    <div className='card-box'>
     
<div className="image-box">
    <img src={thumbnail} alt="" />
</div>

<div className="details">

    <p className='title'>{title}</p>
    <p> {description}</p>
    <p> {category}</p>
  
    <p>  price = ${price}  </p>
    <button> add to cart</button>

</div>
    </div>
  )
}

export default Cards