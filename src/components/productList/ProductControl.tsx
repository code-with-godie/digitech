'use client';
import { Favorite, FavoriteBorderOutlined } from '@mui/icons-material';
import { IconButton, Rating } from '@mui/material';
import React, { MouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { updateUser } from '@/context/userSlice';
import { User } from '@/typings/typing';
import { appwriteService } from '@/appWrite/appwriteService';
const ProductControl = ({ rating, id }: { rating: number; id: string }) => {
  const { currentUser } = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const saveProduct = async (e: MouseEvent<HTMLButtonElement>, id: string) => {
    try {
      e.stopPropagation();
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
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=' flex items-center justify-between'>
      <Rating
        readOnly
        value={rating}
      />
      <IconButton onClick={e => saveProduct(e, id)}>
        {currentUser?.saved.includes(id) ? (
          <Favorite />
        ) : (
          <FavoriteBorderOutlined />
        )}
      </IconButton>
    </div>
  );
};

export default ProductControl;
