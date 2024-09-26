'use client';
import React, { useEffect, useState } from 'react';
import { Product, CartItem } from '@/typings/typing';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { addToCart, decrease, increase } from '@/context/cartSlice';

const Add = ({
  $id,
  images,
  price,
  sizes,
  stock,
  discount,
  brand,
  colors,
  title,
}: Product) => {
  const [color, setColor] = useState<string>('');
  const [size, setSize] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [inCart, setinCart] = useState<boolean>(false);
  const [cartItem, setCartItem] = useState<CartItem | null | undefined>(null);
  const { cartItems } = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();
  const addCartItem = () => {
    const item: CartItem = {
      image: images[0],
      $id,
      brand,
      color,
      size,
      title,
      stock,
      price: price - discount,
      amount: quantity,
    };
    dispatch(addToCart(item));
    setColor('');
    setSize('');
    setQuantity(1);
  };
  const handleIncrease = () => {
    inCart
      ? dispatch(increase($id))
      : setQuantity(prev => (prev < stock ? prev + 1 : prev));
  };
  const handleDecrease = () => {
    inCart
      ? dispatch(decrease($id))
      : setQuantity(prev => (prev > 1 ? prev - 1 : prev));
  };
  useEffect(() => {
    if (sizes.length === 1) {
      setSize(sizes[0]);
    }
    if (colors.length === 1) {
      setColor(colors[0]);
    }
    const inCart = cartItems?.some(item => item?.$id === $id);
    setinCart(inCart);
    if (inCart) {
      const tempItem: CartItem | null | undefined = cartItems.find(
        item => item?.$id === $id
      );
      if (tempItem) {
        setCartItem(tempItem);
      }
    }
  }, [$id, cartItems, colors, sizes]);
  return (
    <div className='flex flex-col gap-2'>
      <div className=' flex flex-col gap-2'>
        <p className=' text-lg text-black/70'>choose a color</p>
        <div className=' flex items-center gap-2'>
          {colors.map((item: string, index: number) => {
            return (
              <div
                onClick={() => setColor(item)}
                style={{ backgroundColor: item }}
                key={index}
                className={` ${
                  color === item && 'ring'
                } w-5 h-5 rounded-full cursor-pointer`}
              ></div>
            );
          })}
        </div>
      </div>
      <div className=' flex flex-col gap-2'>
        <p className=' text-lg text-black/70'>choose a size</p>
        <div className=' flex items-center gap-2'>
          {sizes.map((item: string, index: number) => (
            <div
              onClick={() => setSize(item)}
              key={index}
              className={` ${
                size === item && ' bg-black border-none   text-white'
              } py-1 px-4 border text-sm  rounded-sm border-golden cursor-pointer`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className=' flex flex-col gap-2'>
        {quantity >= stock && (
          <p className=' py-2 text-red-500 text-xs animate-bounce'>
            only {stock} items are availble for order
          </p>
        )}
        <p className=' text-lg text-black/70'>choose a Quantity</p>
        <div className=' flex flex-col sm:items-center gap-2 sm:flex-row'>
          <div className=' flex bg-gray-100 gap-2  items-center px-4 rounded-2xl sm:self-start '>
            <button
              onClick={handleIncrease}
              className=' p-1 text-2xl text-black/60'
            >
              +
            </button>
            <button className=' p-1 text-black/60'>
              {' '}
              {inCart ? cartItem?.amount : quantity}{' '}
            </button>
            <button
              onClick={handleDecrease}
              className=' p-1 text-2xl text-black/60'
            >
              -
            </button>
          </div>

          {!inCart && (
            <div className=' flex flex-1 sm:justify-end'>
              <button
                disabled={!size || !color}
                className=' py-1 px-4 rounded-2xl  bg-black text-white cursor-pointer flex-grow sm:flex-grow-0 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:border-none disabled:text-white'
                onClick={addCartItem}
              >
                add to cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Add;
