import React, { useContext } from 'react'
import {PRODUCTS} from '../../Products';
import {shopContext} from "../../Context/shopContext";
import CartItem from './cart-item';
function Cart() {
  const {cartItems}=useContext(shopContext);

  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
{PRODUCTS.map((product)=>{
if(cartItems[product.id] !==0){
  return <CartItem data={product}/>
}
})}
      </div>
    </div>
  )
}

export default Cart