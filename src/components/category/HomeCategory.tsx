import React from 'react';
import { Category } from '@/typings/typing';
import Image from 'next/image';
import Link from 'next/link';
import { appwriteService } from '@/appWrite/appwriteService';
const HomeCategory = async () => {
  const cat = await appwriteService.getCategories();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const categories: Category[] = cat.map((doc: any) => ({
    $id: doc.$id,
    name: doc.name,
    banner: doc.bannner,
    hasAnOffer: doc.hasAnOffer,
    discount: doc.discount,
  }));

  return (
    <div className=' bg-[#F4F8F8] flex flex-col gap-2'>
      <h1 className=' p-4 text-lg md:text-xl capitalize text-gray-600'>
        shop by categories
      </h1>
      <div className=' mygrid'>
        {categories?.map(item => (
          <div
            className=' bg-gray-200 flex flex-col gap-2 rounded-lg'
            key={item.$id}
          >
            <div className=' w-full h-56 relative p-4'>
              <Image
                alt='category image'
                src={item.banner}
                fill
                className=' object-contain'
              />
            </div>
            <div className=' py-4 cursor-pointer px-6 flex'>
              <Link
                href={`/category?category=${item.name}&id=${item.$id}`}
                className=' flex-1 bg-white text-black py-2 px-6 rounded-lg'
              >
                {item.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCategory;
