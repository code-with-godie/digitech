'use client';
import Image from 'next/image';
import { useState } from 'react';

const FileViewer = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className=' p-2 flex flex-col gap-2'>
      <div className=' w-full h-72 relative'>
        <Image
          alt='product image'
          src={items[currentIndex]}
          fill
          className=' object-contain rounded-md'
        />
      </div>
      <div className='flex gap-1 flex-wrap  justify-between  items-center'>
        {items.map((item, i) => (
          <div
            className='w-20 h-20 relative cursor-pointer'
            key={item._id}
            onClick={() => setCurrentIndex(i)}
          >
            <Image
              src={items[i]}
              alt='other product image'
              fill
              className='object-cover rounded-md'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileViewer;
