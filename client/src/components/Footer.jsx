import React from 'react';
// icons
import {FaYoutube , FaInstagram , FaFacebook , FaShopify, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
  <footer className='pt-12 bg-primary'>
    <div className="container mx-auto">
      <div className=' text-center'>
        <h2 className='h2 uppercase mb-6 font-semibold'>Subscribe to our NewsLetter</h2>
        <p className=' text-white/70'>Be the first to get the latest news about offers, trends and much more!</p>
      </div>
      {/* form */}
      <form className='w-full max-w-3xl mx-auto flex flex-col 
      md:flex-row gap-4 my-10'>
        <input type="email" placeholder='your email address'
        className='input'
        />
        <button className='btn btn-accent min-w-[130px] px-0'>Join NOW!!!</button>
      </form>
      {/* links  */}
      <div className=' flex gap-x-8 text-white/60 max-w-max mx-auto mb-4'>
        <a href='#' className='hover:text-white transition-all'>
          Return Policy
        </a>
        <a href='#' className='hover:text-white transition-all'>
          Track Order
        </a>
        <a href='#' className='hover:text-white transition-all'>
          Shipping & Delivery
        </a>
      </div>
      {/* social */}
      <div className=' flex gap-x-6 max-w-max mx-auto text-2xl mb-10'>
        <a href='https://www.facebook.com/Meta/' className='hover:text-white transition-all'>
          <FaFacebook className=' hover:scale-110'/>
        </a>
        <a href='https://www.instagram.com/?hl=en' className='hover:text-white transition-all'>
          <FaInstagram className=' hover:scale-110'/>
        </a>
        <a href='https://in.youtube.com/' className='hover:text-white transition-all'>
          <FaYoutube className=' hover:scale-110'/>
        </a>
        <a href='https://www.shopify.com/' className='hover:text-white transition-all'>
          <FaShopify className=' hover:scale-110'/>
        </a>
        <a href='https://www.tiktok.com/en/' className='hover:text-white transition-all'>
          <FaTiktok className=' hover:scale-110'/>
        </a>
      </div>
    </div>

    {/* copyright  */}
    <div className=' py-8 border-t border-t-white/10'>
      <div className=' container mx-auto'>
        <div className=' text-center text-sm text-white/60'>Copyright &copy; e-shop 2023. All rights reserved.</div>
      </div>
    </div>
  </footer>);
};

export default Footer;

{/* <FaFacebook/>
    <FaInstagram/>
    <FaYoutube/>
    <FaShopify/> */}
