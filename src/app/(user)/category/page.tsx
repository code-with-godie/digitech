import React from 'react';
import CategoryBanner from '@/components/banner/CategoryBanner';
import CategoryProducts from '@/components/category/Category';
import CategoryFilters from '@/components/category/CategoryFilters';
const Category = ({ searchParams }: { searchParams: URLSearchParams }) => {
  const params = new URLSearchParams(searchParams);
  const category = params.get('category');
  return (
    <div className='overflow-auto flex flex-col gap-2'>
      <CategoryBanner category={category} />
      <div className='flex flex-col md:flex-row flex-1 gap-2 pb-10'>
        <CategoryFilters />
        <CategoryProducts category={category} />
      </div>
    </div>
  );
};

export default Category;
