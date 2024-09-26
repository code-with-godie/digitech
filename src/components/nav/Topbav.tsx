'use client';
import React from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { Person, ShoppingCart } from '@mui/icons-material';
import UserModel from '@/components/user/UserModel';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { openDrawer, toggleAccountModel } from '@/context/appSlice';
import Image from 'next/image';
import { IconButton } from '@mui/material';
import Drawer from './Drawer';
// import Dropdown from '../dropdown/DropDown';
const Topbav = () => {
  const { showModel, showDrawer } = useAppSelector(state => state.app);
  const { currentUser } = useAppSelector(state => state.user);
  const { amount } = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();

  return (
    <div className=' p-2 bg-blue-950 flex justify-between md:flex-row items-center gap-2 relative'>
      <div className=' pr-7  text-white font-bold text-lg leading-3'>
        DIGITECH
      </div>
      <div className=' hidden flex-1 md:flex gap-2 text-white capitalize text-lg'>
        <Link href='/'>home</Link>
        <Link href='/'>home</Link>
        <Link href='/'>home</Link>
        <Link href='/'>home</Link>
        {/* <Dropdown /> */}
      </div>
      <div className=' sm:flex-1 flex gap-3'>
        <form
          className='hidden sm:flex justify-end gap-2 flex-1'
          // action={handleSearch}
        >
          <input
            name='category'
            type='text'
            placeholder='search...'
            className=' hidden sm:block flex-1 p-2 outline-none text-white rounded-3xl border-none text-sm bg-slate-800/70'
          />
          <button className=' px-4  border-none bg-slate-800/70 rounded-3xl text-white cursor-pointer capitalize text-sm'>
            search
          </button>
        </form>
      </div>
      <div className=' flex items-center gap-2'>
        <div
          className=' flex gap-1 cursor-pointer  items-center'
          onClick={() => dispatch(toggleAccountModel())}
        >
          {currentUser ? (
            <Image
              width={30}
              height={30}
              alt='profile picture'
              src={currentUser.avatar}
              className=' rounded-full'
            />
          ) : (
            <Person className=' text-white text-3xl' />
          )}{' '}
          <p className='hidden sm:block text-sm text-white'>
            {' '}
            {currentUser ? currentUser?.username : 'Guest'}{' '}
          </p>
        </div>
        <Link
          href={'/cart'}
          className=' flex gap-1 relative p-2 '
        >
          <ShoppingCart className=' text-white text-3xl ' />
          <p className=' text-sm text-red-500 absolute bg-white w-[20px] h-[20px] p-1  rounded-full z-10 -top-1  right-0 grid place-content-center'>
            {amount}
          </p>
        </Link>
        <IconButton
          className='md:hidden'
          onClick={() => dispatch(openDrawer())}
        >
          <FaBars color='white' />
        </IconButton>
      </div>
      {showModel && <UserModel />}
      {showDrawer && <Drawer />}
    </div>
  );
};

export default Topbav;
