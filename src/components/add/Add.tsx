/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React, { useState } from 'react';
import { Product, CartItem } from '@/typings/typing';

const Add = ({
  images,
  price,
  sizes,
  stock,
  discount,
  colors,
  title,
  description,
}: Product) => {
  const [color, setColor] = useState<string | null>(null);
  const [size, setSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [inCart, setinCart] = useState<boolean>(false);
  const [cartItem, setCartItem] = useState<CartItem | null>(null);
  const addToCart = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const item: CartItem = {
    //   image: images[0],
    //   color,
    //   size,
    //   title,
    //   description,
    //   stock,
    //   price: price - discount,
    //   amount: quantity,
    // };
    // addCartItem(item);
    setColor(null);
    setSize(null);
    setQuantity(1);
  };
  const handleIncrease = () => {
    // inCart
    //   ? increaseCartItem(_id)
    //   : setQuantity(prev => (prev < stock ? prev + 1 : prev));
  };
  const handleDecrease = () => {
    // inCart
    //   ? decreaseCartItem(_id)
    //   : setQuantity(prev => (prev > 1 ? prev - 1 : prev));
  };
  //   useEffect(() => {
  //     setCartItem();
  //     const inCart = cartItems?.some(item => item?._id === _id);
  //     setinCart(inCart);
  //     if (inCart) {
  //       setCartItem(cartItems.find(item => item?._id === _id));
  //     }
  //   }, [_id, cartItems]);
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
                size === item && ' bg-golden border-none   text-white'
              } py-1 px-4 border text-sm  rounded-sm border-golden cursor-pointer`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className=' flex flex-col gap-2'>
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
          {stock < 10 && (
            <div className=' flex flex-col'>
              <p className=' text-sm text-black/70'>
                Only <span className=' text-golden'> {stock} items</span> left.
              </p>
              <p className=' text-sm text-black/70'>Don&apos;t miss it</p>
            </div>
          )}
          {!inCart && (
            <div className=' flex flex-1 sm:justify-end'>
              <button
                disabled={!size || !color}
                className=' py-1 px-4 rounded-2xl border border-golden cursor-pointer flex-grow sm:flex-grow-0 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:border-none disabled:text-white'
                onClick={addToCart}
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
