import React from 'react';
// link
import {Link} from 'react-router-dom';

const Product = ({product}) => {
  // console.log(product);
  return (<Link to={`/product/${product.id}`}>
    <div className='grad relative w-full h-[362px] rounded-[8px] overflow-hidden group'>
      {/* badge */}
      {product.attributes.isNew ? 
      (<div className="absolute bg-accent text-primary text-[12px] top-4 right-2 font-extrabold px-2 rounded-full z-10 select-none">NEW</div>)
      : ('')}
      {/* image */}
      <div className=' w-full h-[240px] flex items-center justify-center relative select-none'>
        <img 
        className=' w-[205px] h-[185px] object-contain group-hover:scale-95 transition-all'
        src={`http://localhost:1337${product.attributes.image.data.attributes.url}`} alt="New Product Pics" />
      </div>
      {/* text */}
      <div className='px-6 pb-8 flex flex-col mb-2'>
        {/* category title  */}
        <div className='text-sm text-accent uppercase mb-1'>{product.attributes.categories.data[0].attributes.title}</div>
        {/* product title  */}
        <div className='mb-3 md:mb-0'>{product.attributes.title.substring(0,31)}...</div>
        {/* price */}
        <div className=' font-semibold text-lg text-accent'>₹{product.attributes.price}</div>
      </div>
    </div>
  </Link>);
};

export default Product;
