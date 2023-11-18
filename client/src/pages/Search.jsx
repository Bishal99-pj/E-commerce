import React from 'react';
// useLocation hook
import {useLocation} from 'react-router-dom';
import useFetch from '../hooks/useFetch';
// components
import CategoryNav from '../components/CategoryNav';
import Product from '../components/Product';

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('query'); // localhost/search?query=hello // searchTerm = 'hello'
  // console.log(searchTerm);

  // filter by searchTerm
  const {data} = useFetch(`/products?populate=*&filters[title][$contains]=${searchTerm}`);
  // console.log(data);
  return (<div className='mb-[30px] pt-40 lg:pt-4 xl:pt-0'>
    <div className="container mx-auto">
      <div className='flex gap-x-[24px]'>
        <CategoryNav/>
        <div>
          {/* title  */}
          <div className='tetx-xl py-3 text-accent 
          font-semibold uppercase text-center md:text-left'>
            {data ? (data?.length > 0 ? `${data?.length} results for` : `no results found for`) : 'loading results for...'} {`'${searchTerm}'`}
          </div>
          {/* search result - product cards */}
          <div className=' grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
            {data?.map(p=>{
              return <Product key={p.id} product={p}/>;
            })}
          </div>
        </div>
      </div>
    </div>
  </div>);
};

export default Search;
