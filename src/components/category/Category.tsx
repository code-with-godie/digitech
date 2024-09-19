import ProductList from '@/components/productList/ProductList';
import { Suspense } from 'react';
import CategorySkeleton from '../skeleton/CategorySkeleton';
const Category = ({
  category,
}: {
  category: string | string[] | undefined | null;
}) => {
  return (
    <div className='w-4/5 p-4'>
      <Suspense fallback={<CategorySkeleton counter={20} />}>
        <ProductList category={category} />
      </Suspense>
    </div>
  );
};

export default Category;
