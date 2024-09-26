'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';
import { slides } from '@/data/data';
import { useRouter } from 'next/navigation';
const Slider = () => {
  const router = useRouter();
  return (
    <div className=' flex h-screen w-full md:h-[80vh]'>
      <Swiper
        className=' relative w-full h-full'
        spaceBetween={0}
        pagination
        autoplay={{
          delay: 3000,
        }}
        slidesPerView={1}
        loop={true}
        modules={[Autoplay, A11y, Pagination]}
      >
        {slides.map(item => (
          <SwiperSlide
            key={item.id}
            className=' w-full h-full'
          >
            <div
              style={{ background: `${item.bg}` }}
              className={` w-full h-full cursor-pointer flex flex-col md:flex-row relative`}
              onClick={() => router.push(`/category?category=${item.title}`)}
            >
              <div className=' md:flex-1 grid place-content-center text-black/80  w-full py-4  gap-2'>
                <h1 className=' text-center text-3xl md:text-6xl text-blue-950'>
                  {' '}
                  {item.title}{' '}
                </h1>
                <p className=' text-center text-xl md:text-2xl'>
                  {' '}
                  {item.description}{' '}
                </p>
                <div className=' flex justify-center'>
                  <button className=' bg-black text-white py-2 px-6 cursor-pointer capitalize text-lg rounded-lg'>
                    shop now
                  </button>
                </div>
              </div>
              <div className=' relative flex-1 bg-semi_black p-2 mt-2'>
                <Image
                  className=' object-cover  md:opacity-100'
                  src={item.img}
                  fill
                  alt='an image display'
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Slider;
