import React, { createContext, useEffect, useState } from 'react';

// create context
export const CartContext = createContext();

const CartProvider = ({children}) => {
  const [isOpen , setIsOpen] = useState(false);
  const [products , setCart] = useState([]);
  const [amount , setAmount] = useState(0);
  const [total , setTotal] = useState(0);

  // cart total
  useEffect(()=>{
    const total = products.reduce((a,c)=>{
      return a + (c.attributes.price * c.amount);
    },0);
    setTotal(total);
  },[products])

  // add to cart
  const addToCart = (item , id)=>{
    const itemId = parseInt(id);
    const newItem = {...item[0], amount: 1};
    // console.log(item , itemId);
    // console.log(newItem);
    setCart([...products, newItem]);

    
    // check if item already exists in cart (update its amount only)
    const cartItem = products.find(item=> (item.id === itemId));
    // console.log(cartItem);

    if(cartItem){
      const newCart = products.map(item=>{
        if(item.id === itemId){
          setAmount(cartItem.amount + 1);
          return {...item , amount: cartItem.amount+1};
        }else{
          return item;
        }
      });
      setCart(newCart);
    }else{
      setCart([...products , newItem]);
    }
    // open cart when items are added
    setIsOpen(true);
  }

  // remove from cart
  const removeFromCart = (id)=>{
    const newCart = products.filter(item => item.id !== id );
    setCart(newCart);
    if(!newCart.length) setIsOpen(false);
  }

  // handle quantity input 
  const handleInput = (e, id)=>{
    const q = parseInt(e.target.value);
    const cartItem = products.find(item=> (item.id === id));

    if(cartItem){
      const newCart = products.map(item=>{
        if(item.id === id){
          if(isNaN(q)){
            setAmount(1);
            return {...item , amount: 1}
          }else{
            setAmount(q);
            return {...item , amount : q }
          }
        }else{
          return item;
        }
      });
      setCart(newCart);
    }
  }

  // clear cart
  const clearCart = ()=>{
    setCart([]);
  }

  return (
  <CartContext.Provider 
  value={{isOpen , setIsOpen , addToCart, products , removeFromCart, handleInput , total , clearCart}}>
    {children}
  </CartContext.Provider>);
};

export default CartProvider;