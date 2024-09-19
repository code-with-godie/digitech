import React from 'react';
import Image from 'next/image';
const FirstBanner = () => {
  return (
    <div className=' h-[70vh] bg-gray-100 flex'>
      <div className=' flex gap-2 flex-1'>
        <div className=' flex-1 h-full flex justify-center items-center flex-col gap-2 px-2'>
          <h1 className=' text-black font-bold text-2xl capitalize max-w-[350px] text-center md:text-5xl md:max-w-none w-full'>
            unleash innovation in every gadget
          </h1>
          <p className=' text-gray-600 text-lg'>
            explore world cutting-edge tech
          </p>
          <button className=' bg-black text-white py-2 px-6 cursor-pointer capitalize text-lg rounded-lg'>
            explore
          </button>
        </div>
        <div className=' hidden  flex-1 sm:flex justify-center items-center h-full relative'>
          <Image
            width={600}
            height={600}
            className=' object-contain  absolute -z-10 filter blur-sm'
            src='/slide-1.jpg'
            alt='display'
          />
          <Image
            width={400}
            height={400}
            className=' object-contain '
            src='/banner.jpeg'
            alt='display'
          />
        </div>
      </div>
    </div>
  );
};

export default FirstBanner;
