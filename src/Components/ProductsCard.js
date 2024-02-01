import React, { useEffect, useState } from 'react'
import { useCart } from '../Context/CartContext';
export const ProductsCard = ({product}) => {

  const {addToCart,removeFromCart,cartList} = useCart();
  const {image,name,id} = product;
  const [isInCart , setIsInCart] = useState(false);

  useEffect(()=>{
    const productIsInCart  = cartList.find(cartItem => cartItem.id === id);
    if(productIsInCart){
      setIsInCart(true)
    }else{
      setIsInCart(false)
    }
  },[cartList,id])

  return (
    <div className='col-md-4'>
      <div className='card w-100  mb-4'>
        <div className='card-body p-1'>
          <div className='img-thumbnail'>
            <img src={image} className='img-fluid' alt='title' />
          </div>
          <h5 className='card-title text-center my-3'>{name}</h5>
          <div className='m-2 d-flex justify-content-between align-items-center'>
            <p className='fw-bold mb-0'>Price: {id}lei</p>
            {isInCart ? (<button onClick={() => removeFromCart(product)} className='btn btn-danger px-4 rounded-3'>REMOVE</button>) : <button onClick={() => addToCart(product)} className='btn btn-primary px-4 rounded-3'>ADD To Card</button>}
          </div>
        </div>
      </div>      
    </div>
  )
}
