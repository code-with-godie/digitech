import React from 'react';
import Image from 'next/image';
const CategoryBanner = ({ category }: { category: string | null }) => {
  return (
    <div className=' h-32 bg-gray-100 flex'>
      <div className=' flex gap-2 flex-1'>
        <div className=' flex-1 h-full flex justify-center items-center flex-col gap-2 px-2'>
          <h1 className=' text-black font-bold text-2xl capitalize max-w-[350px] text-center md:text-3xl w-full'>
            {`get up to 30% off on ${category}`}
          </h1>
          <p className=' text-gray-600 text-lg'>
            {`shop more,spend less. Hurry and grab this deal on ${category}`}{' '}
          </p>
        </div>
        <div className=' hidden  flex-1 sm:flex justify-center items-center h-full relative'>
          <div className=' w-32 h-28 relative'>
            <Image
              className=' object-contain '
              src='/banner.jpeg'
              fill
              alt='display'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;
