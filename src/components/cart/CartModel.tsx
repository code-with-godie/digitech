import { appwriteService } from '@/appWrite/appwriteService';
import { removeCartItem } from '@/context/cartSlice';
import { updateUser } from '@/context/userSlice';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { User } from '@/typings/typing';
import {
  Close,
  DeleteOutline,
  FavoriteBorderOutlined,
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';

const CartModel = ({
  closeModel,
  id,
}: {
  closeModel: (params: boolean) => void;
  id: string;
}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { currentUser } = useAppSelector(state => state.user);
  const handleAddToFavourite = async () => {
    try {
      if (!currentUser) {
        router.push('/sign-in');
        return;
      }
      const user = await appwriteService.saveProduct(currentUser.email, id);
      if (user) {
        const newUser: User = {
          email: user?.email,
          accountId: user?.accountId,
          username: user?.username,
          avatar: user?.avatar,
          saved: user?.saved,
          $id: user.$id,
        };
        dispatch(updateUser(newUser));
      }
      dispatch(removeCartItem(id));
      closeModel(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=' flex gap-2 flex-col bg-white p-4 px-6 w-full max-w-[500px]'>
      <div className=' flex items-center justify-between'>
        <h1 className=' font-semibold text-lg'>Remove from cart</h1>
        <IconButton onClick={() => closeModel(false)}>
          <Close />
        </IconButton>
      </div>
      <p className=' text-gray-500'>
        do you realy want to remove this item from cart?
      </p>
      <div className=' flex justify-between items-center'>
        <button
          onClick={handleAddToFavourite}
          className=' text-sm py-2 px-4 border border-blue-700'
        >
          {' '}
          <FavoriteBorderOutlined className=' text-cyan-500' /> save to wishlist
        </button>
        <button
          onClick={() => dispatch(removeCartItem(id))}
          className=' text-sm py-2 px-4 border border-blue-700'
        >
          {' '}
          <DeleteOutline className=' text-blue-400' /> remove item
        </button>
      </div>
    </div>
  );
};

export default CartModel;
