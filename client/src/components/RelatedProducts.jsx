import React from 'react';
// useFetch hook
import useFetch from '../hooks/useFetch';
// components
import ProductSlider from './ProductSlider';

const RelatedProducts = ({category , displayedId}) => {
  // get products by category name (TODO:- except the one displayed)
  const {data} = useFetch(`/products?populate=*&filters[categories][title]=${category}`);
  // console.log(data);

  const filteredData = data?.filter((p)=> p.id !== displayedId);
  // console.log(filteredData);

  if(!filteredData) return (<h3>Loading...</h3>);

  return (
  <div className=' mb-14'>
    <div className="container mx-auto">
      <h2 className=' h2 mb-2 text-center xl:text-left capitalize font-bold'>RELATED PRODUCTS</h2>
      {data && <ProductSlider data={filteredData}/> }
    </div>
  </div>);
};

export default RelatedProducts;
