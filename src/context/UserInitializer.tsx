'use client';

import { authService } from '@/appWrite/auth';
import { useAppDispatch } from '@/hooks';
import { User } from '@/typings/typing';
import { useCallback, useEffect } from 'react';
import { login } from './userSlice';

const UserInitializer = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const getUser = useCallback(async () => {
    try {
      const session = await authService.getUser();
      if (session) {
        const newUser: User = {
          email: session?.email,
          accountId: session?.accountId,
          username: session?.username,
          avatar: session?.avatar,
          saved: session?.saved,
          $id: session.$id,
        };
        dispatch(login(newUser));
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);
  useEffect(() => {
    getUser();
  }, [getUser]);
  return <> {children} </>;
};

export default UserInitializer;
