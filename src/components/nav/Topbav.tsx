import React from 'react';
import Link from 'next/link';
// import Dropdown from '../dropdown/DropDown';
const Topbav = () => {
  return (
    <div className=' p-2 bg-blue-950 flex flex-col md:flex-row items-center gap-2'>
      <div className=' pr-7  text-white font-bold text-lg leading-3'>
        DIGITECH Technologies
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
    </div>
  );
};

export default Topbav;
