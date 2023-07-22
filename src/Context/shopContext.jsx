import React from 'react';
import { useState } from 'react';
import { PRODUCTS } from '../Products';
import { createContext } from 'react';
export const shopContext=createContext(null);

const getDefaultCart=()=>{
    let cart={};
    for(let i=1;i<PRODUCTS.length+1;i++){
        cart[i]=0;
    }
    return cart; 
}

const ShopContextProvider = (props) => {
const [cartItems,setCartItems]=useState(getDefaultCart());

const addToCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId] +1}));
}

const removeFromCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1
        
    }));
}
const contextValue={cartItems, addToCart,removeFromCart};

console.log(cartItems);
  return (
    <shopContext.Provider value={contextValue}>{props.children}</shopContext.Provider>
  )
}

export default ShopContextProvider