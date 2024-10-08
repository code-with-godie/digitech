'use client';
import { useAppSelector } from '@/hooks';
import Image from 'next/image';

const Profile = () => {
  const { currentUser } = useAppSelector(state => state.user);
  return (
    <div className=' flex gap-2 h-full'>
      <div className=' flex-1 max-w-[320px] min-w-[200px] flex justify-center items-center'>
        <Image
          width={300}
          height={300}
          alt='profile picture'
          src={currentUser?.avatar || '/noprofile.png'}
          className='my-shadow p-2 rounded-lg'
        />
      </div>
      <div className=' flex-1 flex  justify-center p-2 flex-col gap-4'>
        <div className=' flex gap-2 items-center p-4 my-shadow rounded-lg '>
          <h1 className=' capitalize font-semibold text-lg'>username:</h1>
          <p className=' text-gray-600'> {currentUser?.username} </p>
        </div>
        <div className=' flex gap-2 items-center p-4 my-shadow rounded-lg '>
          <h1 className=' capitalize font-semibold text-lg'>email:</h1>
          <p className=' text-gray-600'> {currentUser?.email} </p>
        </div>
        <div className=' flex gap-2 items-center p-4 my-shadow rounded-lg justify-center bg-black  cursor-pointer'>
          <button className=' font-semibold capitalize text-white'>
            update details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
