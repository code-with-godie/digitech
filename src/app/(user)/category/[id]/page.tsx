import { appwriteService } from '@/appWrite/appwriteService';
import Add from '@/components/add/Add';
import FileViewer from '@/components/fileviewer/FileViewer';
import Related from '@/components/related/Related';
// import SizeViewer from '@/components/sizeviewer/SizeViewer';
// import { getProduct, getProducts } from '@/lib/lib';
import { Rating } from '@mui/material';
import { Models } from 'appwrite';
// import { cache } from 'react';
// import { notFound } from 'next/navigation';

export const generateMetadata = async ({ params: { id } }: Props) => {
  const product: Models.Document = await appwriteService.getSingleProduct(id);
  if (!product.title) {
    return {
      title: '404 product not found!',
    };
  }
  return {
    title: product.title,
    description: product.description,
  };
};
// export const generateStaticParams = async () => {
//   const getProduct = cache(async () => {
//     return await appwriteService.getAllProducts();
//   });
//   const products: Models.Document[] = await getProduct();
//   if (!products) return;
//   return products?.map(item => ({
//     id: item.$id,
//   }));
// };

type Props = {
  params: {
    id: string;
  };
};
const SinglePage = async ({ params: { id } }: Props) => {
  const doc: Models.Document = await appwriteService.getSingleProduct(id);
  const product = {
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
  };
  return (
    <section className=' flex flex-col gap-2'>
      <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16'>
        {/* IMG */}

        <div className='w-full lg:w-1/2 lg:sticky top-20 h-max flex flex-col gap-2 p-2'>
          <FileViewer items={product.images} />
        </div>
        {/* TEXTS */}
        <div className='w-full lg:w-1/2 flex flex-col gap-2 py-6'>
          <h1 className='text-4xl font-medium'>{product.title}</h1>
          <div className='flex items-center gap-4'>
            {product?.discount ? (
              <>
                <h3 className='text-xl text-gray-500 line-through'>
                  ${product.price}
                </h3>
                <h2 className='font-medium text-2xl'>
                  ${product?.price - product?.discount}
                </h2>
              </>
            ) : (
              <>
                <h2 className='font-medium text-2xl'>${product?.price}</h2>
              </>
            )}
          </div>
          <div className='  flex gap-2 items-center'>
            <p className='text-gray-500'>{product.category.name}</p>
            <span className=' text-gray-200'>|</span>
            <p className='text-gray-500'> in stock</p>
          </div>
          <div className='text-sm flex items-center gap-2'>
            <h4 className='font-medium  text-gray-500'>brand</h4>:
            <p className=' text-gray-500'>{product.brand}</p>
          </div>
          <div>
            <Rating
              readOnly
              value={product?.rating}
            />
          </div>
          <Add
            {...product}
            // images={product?.images}
            // price={product?.price}
            // sizes={product?.sizes}
            // colors={product?.colors}
            // stock={product?.stock}
            // discount={product?.discount}
            // description={product?.description}
            // title={product?.title}
          />
          <h1 className='text-black/80 font-semibold pt-6'>Description</h1>
          <p className='text-gray-500'>{product.description}</p>

          {/* REVIEWS */}
        </div>
      </div>
      <Related />
    </section>
  );
};

export default SinglePage;
