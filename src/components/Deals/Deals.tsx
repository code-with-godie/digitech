import React from 'react';
import Image from 'next/image';
import CountDown from '@/components/countDown/CountDown';
const Deals = () => {
  return (
    <div className='h-auto md:h-[70vh] bg-white flex '>
      <div className=' flex gap-2 flex-1 flex-col md:flex-row'>
        <div className=' flex-1 h-full flex justify-center items-center flex-col gap-2 px-2'>
          <h1 className=' text-black font-bold text-2xl capitalize max-w-[350px] text-center md:text-3xl md:max-w-none w-full'>
            deal of the month
          </h1>
          <p className=' text-gray-600 text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis soluta, asperiores, natus est deserunt totam quam
            repellat sit quibusdam provident quaerat molestias? Doloremque eaque
            fugit quasi odio laudantium pariatur quibusdam.
          </p>
          <CountDown />
        </div>
        <div className=' flex-1 flex justify-center items-center h-full relative'>
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

export default Deals;
