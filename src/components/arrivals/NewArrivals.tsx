'use client';
import { MouseEvent, useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { IconButton, Rating } from '@mui/material';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { appwriteService } from '@/appWrite/appwriteService';
import ProductSkeleton from '../skeleton/ProductSkeleton';
import { Product, User } from '@/typings/typing';
import { Models } from 'appwrite';
import { Favorite, FavoriteBorderOutlined } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { useRouter } from 'next/navigation';
import { updateUser } from '@/context/userSlice';
const NewArrivals = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { currentUser } = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const saveProduct = async (e: MouseEvent<HTMLButtonElement>, id: string) => {
    try {
      e.stopPropagation();
      if (!currentUser) {
        router.push('/sign-in');
        return;
      }
      const user = await appwriteService.saveProduct(currentUser.email, id);
      if (user) {
        const newUser: User = {
          email: user?.email,
          accountId: user?.accountId,
          username: user?.username,
          avatar: user?.avatar,
          saved: user?.saved,
          $id: user.$id,
        };
        dispatch(updateUser(newUser));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = useCallback(async () => {
    try {
      setLoading(false);
      const res: Models.Document[] = await appwriteService.getNewArrivals();

      const products: Product[] = res.map((doc: Models.Document) => ({
        $id: doc.$id,
        title: doc.title,
        images: doc.images,
        description: doc.description,
        price: doc.price,
        rating: doc.rating,
        category: doc.category,
        brand: doc.brand,
        discount: doc.discount,
        stock: doc.stock,
        sizes: doc.sizes,
        colors: doc.colors,
        specifications: doc.specifications,
        $createdAt: doc.$createdAt,
        $updatedAt: doc.$updatedAt,
      }));

      setProducts(products);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, [setProducts]);
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  if (loading) {
    return <ProductSkeleton counter={7} />;
  }
  return (
    <div className=' flex flex-col gap-2 py-4 bg-white'>
      <h1 className=' p-4 text-lg md:text-xl capitalize text-gray-600'>
        new arrivals
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
            <SwiperSlide key={item.$id}>
              <Link
                href={`/category?category=${item.category?.name}&id=${item.category.$id}`}
              >
                <div className=' bg-white flex flex-col gap-2 rounded-lg my-shadow'>
                  <div className=' w-full h-56 relative p-4'>
                    <Image
                      alt='item image'
                      src={item.images[0]}
                      fill
                      className=' object-contain'
                    />
                    {item.category.hasAnOffer && (
                      <div className=' p-1 px-2 rounded-lg bg-yellow-600/60 text-white text-xs absolute top-3 z-10 right-2'>
                        {' '}
                        {item.category.discount}%{' '}
                      </div>
                    )}
                  </div>
                  <div className=' p-2 flex flex-col gap-2'>
                    <h1 className=' font-semibold text-lg  truncate'>
                      {' '}
                      {item.title}{' '}
                    </h1>
                    <p className=' text-sm truncate'> {item.description} </p>
                    <div className=' flex items-center gap-4'>
                      {item?.discount ? (
                        <>
                          <h3 className='text-lg text-gray-500 line-through'>
                            ${item.price}
                          </h3>
                          <h2 className='font-medium text-lg'>
                            ${item?.price - item?.discount}
                          </h2>
                        </>
                      ) : (
                        <>
                          {item.category.hasAnOffer ? (
                            <>
                              <h3 className='text-lg text-gray-500 line-through'>
                                ${item.price}
                              </h3>
                              <h2 className='font-medium text-lg'>
                                $
                                {item?.price -
                                  (item?.category.discount / 100) * item.price}
                              </h2>
                            </>
                          ) : (
                            <h2 className='font-medium text-lg'>
                              ${item?.price}
                            </h2>
                          )}
                        </>
                      )}
                    </div>
                    <div className=' flex items-center justify-between'>
                      <Rating
                        readOnly
                        value={item.rating}
                      />
                      <IconButton onClick={e => saveProduct(e, item.$id)}>
                        {currentUser?.saved.includes(item.$id) ? (
                          <Favorite />
                        ) : (
                          <FavoriteBorderOutlined />
                        )}
                      </IconButton>
                    </div>
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

export default NewArrivals;
