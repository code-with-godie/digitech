import React, { Suspense } from 'react';
import CategoryBanner from '@/components/banner/CategoryBanner';
import CategoryProducts from '@/components/category/Category';
import CategoryFilters from '@/components/category/CategoryFilters';
import { Skeleton } from '@mui/material';
const Category = ({ searchParams }: { searchParams: URLSearchParams }) => {
  const params = new URLSearchParams(searchParams);
  const id: string | undefined | null = params.get('id');
  const sort: string | undefined | null = params.get('sort');
  const category: string | undefined | null = params.get('category');
  return (
    <div className='overflow-auto flex flex-col gap-2'>
      <Suspense
        fallback={
          <div className=' flex h-32'>
            <Skeleton className=' h-full w-full' />
          </div>
        }
      >
        <CategoryBanner categoryName={category} />
      </Suspense>
      <div className='flex flex-col md:flex-row flex-1 gap-2 pb-10'>
        <CategoryFilters />
        <CategoryProducts
          sort={sort}
          category={id}
        />
      </div>
    </div>
  );
};

export default Category;
