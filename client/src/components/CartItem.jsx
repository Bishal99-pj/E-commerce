import React, { useContext } from 'react';
// link to product page
import { Link } from 'react-router-dom';
// icons

// components
import Qty from './Qty';
// context
import { CartContext } from '../context/CartContext';

const CartItem = ({item}) => {
  // console.log(item);

  const {removeFromCart} = useContext(CartContext)
  return (
  <div className='flex gap-y-8 gap-x-4'>
    <Link to={`product/${item.id}`} className='w-[100px] h-[100px]'>
      {item && 
      <img src={`http://localhost:1337${item.attributes.image.data.attributes.url}`} 
      alt="Cart Item" />
      }
    </Link>

    <div className='flex-1'>
      {/* title & remove option */}
      <div className=' flex gap-x-4 mb-3 items-center'>
        <Link to={`product/${item.id}`}>{item.attributes.title}</Link>
        <button onClick={()=> removeFromCart(item.id)} className=' w-24 h-10 text-sm cursor-pointer font-medium
        border rounded-[8px] p-2 hover:scale-105 hover:text-primary hover:bg-white/80 transition-all'>
          Remove
        </button>
      </div>
      <div className='  flex items-center gap-x-12'>
        {/* quantity */}
        <div className=' flex gap-x-4 mb-2 '>
          <Qty item={item}/>
        </div>
        <div className='text-accent text-xl'>₹ {item.attributes.price * item.amount}</div>
      </div>

      {/* price   */}
      <div>
        <span className='text-accent'>₹{item.attributes.price} per one</span>
      </div>

    </div> 
  </div>);
};

export default CartItem;
