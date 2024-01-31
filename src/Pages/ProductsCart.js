import React, { useContext } from 'react';
import './ProductsCart.css';
import { Cart } from '../Components/Cart';
import { useTitle } from '../Hooks/useTitle';
import { useCart } from '../Context/CartContext';


export const ProductsCart = ({title}) => {

  const { total, cartList } = useCart();
  useTitle(title);

  return (
    <main>
      <section className='py-4'>
        <div className='container'>
          <div className='row'>
            <h3 className="text-center text-muted mb-5">My Cart:{cartList.length}/ TOTAL:${total}</h3>
            {cartList.map((item)=>(
              <Cart product={item} key={item.id}/>
            ))} 
          </div>
        </div>
      </section>
    </main>
  )
}
