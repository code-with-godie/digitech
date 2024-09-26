'use client';
import { useAppSelector } from '@/hooks';
import { Logout, Person } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import Link from 'next/link';

const ProfileNav = () => {
  const { currentUser } = useAppSelector(state => state.user);
  return (
    <div className=' flex flex-col gap-4 my-shadow flex-1 max-w-[300px] p-2'>
      <div className=' flex gap-2 items-center p-2'>
        <h1 className=' text-2xl text-black font-semibold capitalize'>
          my profile
        </h1>
      </div>
      <Link
        href='/profile'
        className=' flex gap-2 items-center p-2 cursor-pointer  hover:bg-gray-200'
      >
        <Avatar
          src={currentUser?.avatar}
          className=' text-2xl'
        />
        <div>
          <p className=' text-lg text-black/70 capitalize'>
            {' '}
            {currentUser?.username}{' '}
          </p>
          <p className=' text-sm text-gray-600 '> {currentUser?.email} </p>
        </div>
      </Link>
      <Link
        href='/profile/update'
        className=' flex gap-2 items-center p-2 cursor-pointer  hover:bg-gray-200'
      >
        <Person className=' text-2xl text-gray-600 ' />
        <p className=' text-lg text-gray-600 capitalize'>update details</p>
      </Link>
      <Link
        href='/profile/password-recovery'
        className=' flex gap-2 items-center p-2 cursor-pointer  hover:bg-gray-200'
      >
        <Person className=' text-2xl text-gray-600 ' />
        <p className=' text-lg text-gray-600 capitalize'>password recovery</p>
      </Link>
      <Link
        href='/profile/orders'
        className=' flex gap-2 items-center p-2 cursor-pointer  hover:bg-gray-200'
      >
        <Person className=' text-2xl text-gray-600 ' />
        <p className=' text-lg text-gray-600 capitalize'>my orders</p>
      </Link>
      <Link
        href='/profile/saved'
        className=' flex gap-2 items-center p-2 cursor-pointer  hover:bg-gray-200'
      >
        <Person className=' text-2xl text-gray-600 ' />
        <p className=' text-lg text-gray-600 capitalize'>saved items</p>
      </Link>
      <div className=' flex gap-2 items-center p-2 bg-black mx-2 cursor-pointer rounded-lg '>
        <Logout className=' text-white text-2xl' />
        <p className=' text-white text-lg'>logout</p>
      </div>
    </div>
  );
};

export default ProfileNav;
