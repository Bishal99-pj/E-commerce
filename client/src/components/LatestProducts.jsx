import React from 'react';
// useFetch custom hook
import useFetch from '../hooks/useFetch';
//components
import ProductSlider from './ProductSlider';

const LatestProducts = () => {
  // get all products by '/products?populate=*'
  const {data} = useFetch('/products?populate=*&filters[isNew]=true');
  // console.log(data); 

  return (<div className='mb-16'>
  <div className="container mx-auto">
    <h2 className='h2 mb-6 text-center xl:text-left'>Latest Products</h2>
  </div>
  <ProductSlider data={data}/>
</div>);
};

export default LatestProducts;
