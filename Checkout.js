import React from 'react'
import "./Checkout.css"
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{basket, user}, dispatch ]= useStateValue();

  return ( 
    
     <div className='checkout'>
      <div className='checkout__left'>

        <img 

          className='checkout__ad' 
          src='upper badge pic.jpg'
          alt='xyz'

        />

        <div >
          <h3>Hello,{user?.email}</h3>
          <h2 className="checkout__title">
            Your shopping basket 
            </h2>

            {basket.map(item=>(
             <CheckoutProduct
               id={item.id}
               title={item.title}
               image={item.image}
               price={item.price}
               rating={item.rating}
            />
            ))}

        </div>
        <div className='checkout__right'>
          <Subtotal/>
        </div>
      </div>
     </div>
  )

}

export default Checkout;