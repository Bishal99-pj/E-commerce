import React from 'react';
// import swiper react component
import {Swiper , SwiperSlide} from 'swiper/react';
// import swiper styles
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../slider.css';
// import required modules
import {Pagination} from 'swiper';
// img
import CameraImg from '../img/camera.png';
import offerImg1 from '../img/offer_img1.png';
import offerImg2 from '../img/offer_img2.png';

// data
const mainSliderData = [
  {
    img: CameraImg,
    pretitle: 'Special Offer',
    titlePart1 : 'Save 20%',
    titlePart2 : 'On your',
    titlePart3 : 'first order',
    btnText : 'Shop Now',
  },
  {
    img: offerImg1,
    pretitle: 'Special Offer',
    titlePart1 : 'Save 20%',
    titlePart2 : 'On your',
    titlePart3 : 'first order',
    btnText : 'Shop Now',
  },
  {
    img: offerImg2,
    pretitle: 'Special Offer',
    titlePart1 : 'Save 20%',
    titlePart2 : 'On your',
    titlePart3 : 'first order',
    btnText : 'Shop Now',
  },
]

const MainSlider = () => {
  // console.log(data);
  return (<Swiper modules={[Pagination]} 
    loop={true} 
    pagination={{
      clickable: true,
    }}
    className='main-slider max-w-lg h-full bg-primary xl:bg-mainSlider xl:bg-no-repeat lg:max-w-none
    rounded-[8px] overflow-hidden drop-shadow-2xl'
  >
    <>
      {
        mainSliderData.map((slide,index)=>{
          return (<SwiperSlide key={index}>
            <div className="flex flex-col h-full p-[20px] md:p-[40px]">
              {/* text  */}
              <div className=' lg:flex flex-col xl:ml-0'>
                <div className='uppercase mb-1 text-center xl:text-left'>{slide.pretitle}</div>
                <div className='text-3xl md:text-[40px] font-semibold 
                uppercase leading-none text-center xl:text-left mb-8 xl:mb-20'>
                  {slide.titlePart1} <br />
                  {slide.titlePart2} <br />
                  {slide.titlePart3} <br />
                </div>
                <button className='btn btn-accent mx-auto xl:ml-2'>SHOP NOW</button>
              </div>
              {/* img  */}
              <div className='flex-1 xl:relative'>
                <div className="img-wrapper xl:absolute xl:right-0 xl:bottom-12">
                  <img className=" object-cover w-[400px] h-[400px]" src={slide.img} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>)
        })
      }
    </>
  </Swiper>);
};

export default MainSlider;
