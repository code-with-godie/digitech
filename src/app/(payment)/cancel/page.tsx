'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const CancelPage = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/cart');
    }, 3000);
  }, [router]);
  return (
    <div className=' h-screen w-screen overflow-hidden flex  flex-col gap-2 justify-center items-center'>
      <Image
        width={200}
        height={200}
        className=' object-contain'
        alt='cancel image'
        src='/cancel.jpg'
      />
      <p className=' text-gray-500'>waiting for a redirect...</p>
      <p className=' text-red-500'>Your order was cancelled</p>
    </div>
  );
};

export default CancelPage;
