import React, { useContext, useState } from 'react';
// images
import Logo from '../img/logo.png';
// icons
import { SlBag } from 'react-icons/sl';
import { FiMenu } from 'react-icons/fi';
import { FiPhone } from 'react-icons/fi';
// link
import { Link } from 'react-router-dom';
// components
import SearchForm from './SearchForm';
import CategoryNavMobile from './CategoryNavMobile';
import Cart from './Cart';
// cart context
import { CartContext } from '../context/CartContext';


const Header = () => {
  const {products} = useContext(CartContext);
  const {isOpen , setIsOpen} = useContext(CartContext);
  const [catNavMobile , setCatNavMobile] = useState(false);

  return (<header className='bg-primary py-6 fixed w-full top-0 z-50 lg:relative xl:mb-[24px] '>
    {/* Header */}
    <div className="container mx-auto">
      <div className='flex flex-row gap-4 items-center justify-between
      mb-2 xl:mb-0'>
        {/* menu mobile only */}
        <div onClick={()=> setCatNavMobile(true)} className='text-3xl xl:hidden cursor-pointer'>
          <FiMenu/>
        </div>
        <div className={`${catNavMobile ? 'left-0' : '-left-full'} fixed top-0 bottom-0 z-40 
        w-full h-screen transition-all`}>
          <CategoryNavMobile setCatNavMobile={setCatNavMobile} />
        </div>
        {/* logo */}
        <Link to={'/'} className=' lg:hover:rotate-[-15deg] transition-all'>
          <img src={Logo} width={145} height={145} alt="Site Logo (e-shop)" />
        </Link>
        {/* searchform - show on desktop  */}
        <div className='hidden w-full xl:flex xl:w-[734px]'>
          <SearchForm/>
        </div>
        {/* phone and cart */}
        <div className='flex items-center gap-x-[10px]'>
          {/* phone  */}
          <div className='hidden xl:flex uppercase'> 
            Need Help ? <span className=' px-1'><FiPhone className='inline' size={'1rem'}/></span>1800-123-456
          </div>
          {/* cart icon */}
          <div onClick={()=> setIsOpen(!isOpen)} className='relative cursor-pointer'>
            <SlBag className='text-xl xl:text-2xl'/>
            {/* amount */}
            <div className='w-[21px] h-[23px] text-center absolute bg-accent text-primary 
            font-bold rounded-full top-2 left-3 select-none '>{products.length}</div>
          </div>
          {/* cart */}
          <div className={`
          ${isOpen ? 'right-0' : '-right-full'}
           bg-[#0e0f10] shadow-xl fixed top-0 bottom-0 w-full 
            z-30 md:max-w-[500px] transition-all duration-300`}>
            <Cart/>
          </div>
        </div>
      </div>
      {/* searchform (mobile only?) */}
      <div className='xl:hidden'>
        <SearchForm />
      </div>
    </div>  
  </header>);
};

export default Header;
