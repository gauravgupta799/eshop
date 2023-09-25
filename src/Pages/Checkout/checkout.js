import React from 'react';
import "./checkout.css";
import CheckoutProduct from '../../Components/CheckoutProduct/checkoutProduct';
import Subtotal from '../../Components/SubTotal/subtotal';

function Checkout(){
  return (
    <div className='checkout'>
      <div className="checkout__left">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRNaZmwFxGUBvQH4ryWobmp09YETZR84K3w&usqp=CAU" alt="" width="100%" height="200" className="checkout__ad"/>
        <div className="checkout__info">
            <h2>Your Shopping Basket</h2>
            <CheckoutProduct/>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout
