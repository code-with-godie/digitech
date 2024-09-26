import React from 'react';
import { Product } from '@/typings/typing';
import Image from 'next/image';
import Link from 'next/link';
import { appwriteService } from '@/appWrite/appwriteService';
import ProductControl from './ProductControl';

const ProductList = async ({
  category,
  sort,
}: {
  category: string | undefined | null;
  sort: string | undefined | null;
}) => {
  const res = await appwriteService.getCategoryProducts({ sort, category });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const products: Product[] = res.map((doc: any) => ({
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

  if (products.length === 0) {
    return (
      <div>
        <h1>no products found!!!</h1>
      </div>
    );
  }
  return (
    <div className='grid2'>
      {products?.map(item => (
        <Link
          key={item.$id}
          className=' cart-parent'
          href={`/category/${item.$id}`}
        >
          <div className=' bg-white flex flex-col gap-2 rounded-lg my-shadow'>
            <div className=' w-full h-56 relative p-4'>
              <Image
                alt='product image'
                src={item.images[0]}
                fill
                className=' object-cover'
              />
            </div>
            <div className=' p-2 flex flex-col gap-2'>
              <h1 className=' font-semibold text-lg truncate'>
                {' '}
                {item.title}{' '}
              </h1>
              <p className=' text-sm truncate'> {item.description} </p>
              <p className=' font-semibold '> ${item.price} </p>
            </div>
            <ProductControl
              id={item.$id}
              rating={item.rating}
            />
            <button className=' p-2 m-2 capitalize rounded-lg bg-black/85 text-white cursor-pointer btn'>
              add to cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
