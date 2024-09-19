'use client';
import Link from 'next/link';
import { Rating } from '@mui/material';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { products } from '@/data/data';
const Related = () => {
  // if (!products) {
  //   return <notFound />;
  // }

  return (
    <div className=' flex flex-col gap-2 py-4 bg-white'>
      <h1 className=' p-4 text-lg md:text-xl capitalize text-gray-600'>
        Related Products
      </h1>
      <div className='w-full '>
        <Swiper
          autoplay={{ delay: 2000 }}
          loop={true}
          modules={[Autoplay]}
          spaceBetween={10}
          breakpoints={{
            480: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            900: {
              slidesPerView: 4,
            },
          }}
          className='flex gap-x-2 overflow-auto h-full w-full'
        >
          {products?.map(item => (
            <SwiperSlide key={item.id}>
              <Link href={`/category?category=${item.title}`}>
                <div className=' bg-white flex flex-col gap-2 rounded-lg my-shadow'>
                  <div className=' w-full h-56 relative p-4'>
                    <Image
                      alt='product image'
                      src={item.img || ''}
                      fill
                      className=' object-contain'
                    />
                  </div>
                  <div className=' p-2 flex flex-col gap-2'>
                    <h1 className=' font-semibold text-lg'> {item.title} </h1>
                    <p className=' text-sm'> {item.description} </p>
                    <p className=' font-semibold '> ${item.price} </p>
                    <Rating
                      readOnly
                      value={item.rating}
                    />
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Related;
