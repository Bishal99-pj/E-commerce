import React, { useEffect, useState } from 'react';
// useParams hook
import { useParams } from 'react-router-dom';
// custom fetch hook (to send axios request)
import useFetch from '../hooks/useFetch';
// components
import CategoryNav from '../components/CategoryNav';
import Product from '../components/Product';

const Products = () => {
  const {id} = useParams();
  // console.log(id); // returns the id matched with the search query/cat.id
  
  // get products based on category id
  const {data} = useFetch(`/products?populate=*&filters[categories][id][$eq]=${id}`)
  // console.log(data);
  
  const [catTitle , setCatTitle] = useState(null);
  // set title when data is fetched
  useEffect(()=>{
    if(data){
      setCatTitle(data[0].attributes.categories.data[0].attributes.title);
    }
  },[data]);

  return (
  <div
  className=' mb-16 pt-40 lg:pt-0'
  >
    <div className="container mx-auto">
      <div className='flex gap-x-8'>
        <CategoryNav/>
        <main>
          {/* title  */}
          <div
          className=' text-accent font-semibold py-3 text-xl uppercase text-center lg:text-left'
          >
            {catTitle ? `List of all "${catTitle}" in electronics` : 'loading...'}
          </div>
          {/* product grid  */}
          <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4'>
            {data?.map(p=>{
              return (<Product key={p.id} product={p}/>);
            })}
          </div>
        </main>
      </div>
    </div>
  </div>);
};

export default Products;
