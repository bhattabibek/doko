import React from 'react';
import mainBannerBg from '../assets/main_banner_bg.png';
import mainBannerSM from '../assets/main_banner_bg_sm.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative">
      {/* Desktop Image */}
      <img
        className="hidden md:block w-full"
        src={mainBannerBg}
        alt="Main Banner"
      />

      {/* Mobile Image */}
      <img
        className="md:hidden w-full"
        src={mainBannerSM}
        alt="Main Banner"
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:p-0 md:pl-16 lg:pl-24">
        <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left max-w-72 md:max-w-80 leading-tight lg:leading-[4rem]">
          TRUST US FOR ALL ITEMS
        </h1>
        <div className='flex items-center justify-center md:justify-start mt-4'>
<Link to="/products" className='flex group items-center px-7 rounded bg-blue-700 text-white p-3'>Shop Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
