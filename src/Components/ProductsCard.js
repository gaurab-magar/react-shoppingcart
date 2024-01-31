import React from 'react'
import { useCart } from '../Context/CartContext';
export const ProductsCard = ({product}) => {

  const {addToCart} = useCart();
  const {image,name,id} = product;


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
            <button onClick={() => addToCart(product)} className='btn btn-primary px-4 rounded-3'>ADD To Card</button>
          </div>
        </div>
      </div>      
    </div>
  )
}
