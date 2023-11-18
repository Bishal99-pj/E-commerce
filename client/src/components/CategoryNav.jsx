import React from 'react';
// fetch hook
import useFetch from '../hooks/useFetch';
//link
import { Link } from 'react-router-dom';

const CategoryNav = () => {
  const {data} = useFetch('/categories');
  // console.log(data);

  return (
  <aside className='hidden xl:flex'>
    {/* CategoryNav */}
    <div className='bg-primary flex flex-col w-[280px] h-[500px] rounded-[8px] overflow-hidden items-center'>
      <div className='bg-accent py-3 text-primary font-semibold w-full text-center'>BROWSE CATEGORIES</div>
      <div className=' w-full flex flex-col gap-y-4 p-6'>
        {data?.map(c=>{
          // routes are defined in App.js
        return (
        <Link to={`/products/${c.id}`} key={c.id} className='w-full text-center cursor-pointer hover:shadow-xl hover:text-lg transition-all 
        uppercase font-semibold py-2'>
          {c.attributes.title}
        </Link>)
      })}</div>
    </div>
  </aside>
  );
};

export default CategoryNav;
