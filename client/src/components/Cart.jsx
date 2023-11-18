import React, { useContext } from 'react';
// icons
import { IoArrowForward, IoClose } from 'react-icons/io5';
import { IoCartOutline } from 'react-icons/io5';

// context
import { CartContext } from '../context/CartContext';
// components
import CartItem from './CartItem';
// stripe
import {loadStripe} from '@stripe/stripe-js';
import { request } from '../request';

const Cart = () => {
  const {setIsOpen , products , total, clearCart } = useContext(CartContext);           
  // console.log(products);
  
  // stripe
  const stripePromise  = loadStripe('pk_test_51OD7aRSIdkK9yRzS1dKaywzByVYOWMTmVurjBMpKyhm3D4jBG2CzDr7fpdhn4mISM5SKHmoRiD7SmZxiDrUnqF4j00aP9H1mhV');
  const handlePayment = async ()=>{
    try {
      const stripe = await stripePromise;
      const res = await request.post("/orders", {    
        products
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });

    } catch (error) {
      alert(error);
    }
  }

  return (
  <div className='w-full h-full px-4 text-white'>
    <div className=' overflow-y-auto overflow-x-hidden h-[80dvh]'>
      {/* close icon */}
     <div 
      onClick={()=> setIsOpen(false)}
      className='text-4xl w-20 h-[98px] flex justify-start
      items-center cursor-pointer'>
        <IoClose/>
      </div>
      
      {products.length ? 
        (<div className=' flex flex-col gap-y-10 px-2'>
          {products?.map((item) => {
            return (<CartItem item={item} key={item.id}/>);
            })}
        </div>) :
        (<div className='absolute top-0 left-0 bottom-0 right-0 grid place-items-center -z-10'>
          <div className=' text-gray-500 text-lg'>Your Cart <IoCartOutline className=' text-3xl inline'/> is Empty</div>
        </div>
        )}
     </div>

        {/* subtotal & total */}
        {products.length >=1 && 
        <div className='px-6 py-3 flex-col'>
          {/* subtotal */}
          <div className=' flex justify-between text-lg'>
            <div>Subtotal</div>
            <div>₹ {total}</div>
          </div>
          {/* total */}
          <div className=' flex justify-between text-2xl'>
            <div>Total</div>
            <div>₹ {total}</div>
          </div>
        </div>}

        {/* buttons  */}
        <div className=' px-6'>
          {products.length >=1 &&
            (<div className=' flex justify-between gap-x-4'> 
              <button className=' btn btn-accent hover:bg-accent-hover text-primary' onClick={clearCart}>clear cart</button>
              <button 
              onClick={handlePayment}
              className=' btn btn-accent hover:bg-accent-hover 
              text-primary flex-1 px-2 gap-x-2'>
                checkout <i className=' text-lg'><IoArrowForward/></i>
              </button>
            </div>)}
        </div>
  </div>);
};

export default Cart;
