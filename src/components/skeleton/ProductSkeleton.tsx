import { Skeleton } from '@mui/material';

const ProductSkeleton = ({ counter = 7 }: { counter: number }) => {
  return (
    <div className=' flex  overflow-auto'>
      {Array(counter).fill(
        <div className=' h-[350px] flex flex-col gap-2 p-4'>
          <Skeleton
            width={250}
            height={250}
            variant='rounded'
          />
          <Skeleton
            width={250}
            height={40}
            variant='rounded'
          />
          <Skeleton
            width={250}
            height={20}
            variant='rounded'
          />
        </div>
      )}
    </div>
  );
};

export default ProductSkeleton;
