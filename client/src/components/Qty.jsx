import React, { useContext } from 'react';
// context 
import { CartContext } from '../context/CartContext';

const Qty = ({item}) => {
  // console.log(item);
  const {handleInput} = useContext(CartContext)
  return <div className='flex gap-x-6 items-center text-primary'>
    {
      (item.amount < 10) ? 
        <select
          className='p-1 rounded-md w-[75px] h-8 outline-none text-primary'
          value={item.amount} 
          onChange={(e)=> handleInput(e,item.id)}
          >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option> 
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10+</option>
        </select>
      : 
      <input 
      onBlur={(e)=> handleInput(e , item.id)}
      className=' text-primary placeholder:text-primary 
      placeholder:opacity-60 h-8 rounded-md p-4 w-[80px] 
      outline-accent' type="number" placeholder={`${item.amount}`} />
    }
  </div>;
};

export default Qty;
