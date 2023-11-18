import React, { useContext } from 'react';
// useParams hook
import { useParams } from 'react-router-dom';
// useFetch hook
import useFetch from '../hooks/useFetch';
// components
import RelatedProducts from '../components/RelatedProducts';
// context
import { CartContext } from '../context/CartContext';

const ProductDetails = () => {
  const {addToCart} = useContext(CartContext);

    // routes are defined in App.js
  const {id} = useParams();
  
  // get product data based on id
  const {data} = useFetch(`/products?populate=*&filters[id][$eq]=${id}`);
  // console.log(data); 
  if(!data){
    return (<div className='container mx-auto text-accent text-3xl pt-4'>Loading...</div>);
  }

  // category for related products
  const cat = data[0].attributes.categories.data[0].attributes.title;
  // console.log(cat);

  return (
  <div className='mb-16 pt-44 lg:pt-[30px] xl:pt-0'>
    {/* ProductDetails */}
    <div className="container mx-auto">
      {/* product info */}
      <div className='flex flex-col lg:flex-row gap-[30px] mb-[30px]'> 
        {/* image  */}
        <div 
        className='flex grad rounded-lg justify-center items-center
        lg:max-w-[40%] lg-h-[540px]'>
          <img 
          className='w-full max-w-[65%]'
          src={`http://localhost:1337${data[0].attributes.image.data.attributes.url}`} 
          alt="" />
        </div>
        {/* txt details  */}
        <div className='flex-1 bg-primary p-12 xl:p-20 rounded-lg flex flex-col justify-center'>
          {/* category title  */}
          <div className='uppercase text-accent text-lg font-medium mb-2'>
            CATEGORY : {data[0].attributes.categories.data[0].attributes.title}
          </div>
          {/* product title  */}
          <h2 className='h2 mb-4'>{data[0].attributes.title}</h2>
          {/* desc  */}
          <p className='mb-12'>{data[0].attributes.description}</p>
          {/* price & btn */}
          <div className='flex items-center gap-x-8'>
            <div className=' text-3xl text-accent font-semibold'>₹{data[0].attributes.price}</div>
            <button 
            onClick={()=> addToCart(data , id)}
            className='btn btn-accent'>Add to Cart</button>
          </div>
        </div>
      </div>
      {/* related products */}
      <RelatedProducts category={cat} displayedId={data[0].id} />
    </div>
  </div>);
};

export default ProductDetails;
