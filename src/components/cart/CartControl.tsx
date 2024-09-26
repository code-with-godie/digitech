import { decrease, increase, removeCartItem } from '@/context/cartSlice';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import CartModel from './CartModel';

const CartControl = ({
  $id,
  amount,
  color,
}: {
  $id: string;
  amount: number;
  color: string;
}) => {
  const [showModel, setShowModel] = useState<boolean>(false);
  const { currentUser } = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  const handleIncrease = () => {
    dispatch(increase($id));
  };
  const handleDecrease = () => {
    dispatch(decrease($id));
  };
  const handleRemove = () => {
    console.log('removing');

    if (!currentUser?.saved.includes($id)) {
      setShowModel(true);
      return;
    }
    dispatch(removeCartItem($id));
  };
  return (
    <div className=' flex items-center justify-between'>
      <div className=' flex items-center gap-2'>
        <div
          style={{ backgroundColor: color }}
          className={`w-5 h-5 rounded-full cursor-pointer p-2`}
        ></div>
        <div
          className='flex items-center  text-sm text-blue-700  cursor-pointer'
          onClick={handleRemove}
        >
          <IconButton>
            <FaTrash
              size={15}
              className=' text-blue-700'
            />
          </IconButton>
          <p className='hover:underline'>remove</p>
        </div>
      </div>
      <div className=' flex bg-gray-100 gap-2  items-center px-4 rounded-2xl sm:self-start '>
        <button
          onClick={handleIncrease}
          className=' p-1 text-2xl text-black/60'
        >
          +
        </button>
        <button className=' p-1 text-black/60'>{amount}</button>
        <button
          onClick={handleDecrease}
          className=' p-1 text-2xl text-black/60'
        >
          -
        </button>
      </div>
      {showModel && (
        <div className=' absolute z-50 top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-black/60'>
          <CartModel
            id={$id}
            closeModel={setShowModel}
          />
        </div>
      )}
    </div>
  );
};

export default CartControl;
