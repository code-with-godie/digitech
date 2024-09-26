'use client';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { useEffect } from 'react';
import { getCartTotal } from './cartSlice';

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector(state => state.cart);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cartItems, dispatch]);
  return <> {children} </>;
}
