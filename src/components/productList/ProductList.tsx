import React from 'react';
import { Product } from '@/typings/typing';
import Image from 'next/image';
import Link from 'next/link';
import { Rating } from '@mui/material';
import { appwriteService } from '@/appWrite/appwriteService';
const ProductList = async ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  category,
}: {
  category: string | string[] | undefined | null;
}) => {
  const res = await appwriteService.getCategoryProducts();

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
          href={`/category/${item.$id}`}
        >
          <div className=' bg-white flex flex-col gap-2 rounded-lg my-shadow'>
            <div className=' w-full h-56 relative p-4'>
              <Image
                alt='product image'
                src={item.images[0]}
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
      ))}
    </div>
  );
};

export default ProductList;
