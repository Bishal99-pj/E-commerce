import React from 'react';
// components
import CategoryNav from './CategoryNav';
import MainSlider from './MainSlider';
// images
import PromoImg1 from '../img/promo_img1.png';
import PromoImg2 from '../img/promo_img2.png';
// link for promo sections
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
  <section className='mb-[30px] pt-36 lg:pt-0 '>
    <div className="container mx-auto">
      <div className="flex flex-col gap-y-[30px] xl:flex-row xl-gap-x-[30px]">
        {/* sidebar  */}
        <div>
          <CategoryNav/>
        </div>
        <div className='w-full lg:w-auto max-w-[30rem] bg-pink-50/10 xl:max-w-[728px] 
        mx-auto xl:mx-[18px] mt-5 lg:mt-0'>
          <MainSlider/>
        </div>

        {/* promo section */}
        <div className='flex flex-col gap-y-[24px] w-full max-w-[30rem] mx-auto h-[500px]'>
          {/* promo1  */}
          <div className='grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6'>
            {/* text */}
            <div className='flex flex-col max-w-[144px] h-full justify-center'>
              <div className=' text-xl uppercase font-semibold leading-tight mb-4'>save 25% all dslr cameras</div>
              <Link to={'/products/1'} className=' text-accent'>SHOP NOW</Link>
            </div>
            {/* promoimg1 */}
            <img className="absolute z-20 top-2 -right-4" src={PromoImg1} alt="promo-1" />
          </div>

          {/* promo2  */}
          <div className='grad relative flex flex-row-reverse flex-1 h-[250px] rounded-[8px] overflow-hidden p-6'>
            {/* promoimg2 */}
            <img 
            // width={'380px'} height={'200px'} 
            className="w-[268px] h-[200px] absolute top-0 left-0 object-contain" src={PromoImg2} alt="promo-2" />
            {/* text */}
            <div className='flex flex-col max-w-[124px] h-full xl:text-right'>
              <div className=' text-xl uppercase font-semibold leading-tight mb-4'>save 20% all laptops</div>
              <Link to={'/products/3'} className=' text-accent'>SHOP NOW</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>);
};

export default Hero;