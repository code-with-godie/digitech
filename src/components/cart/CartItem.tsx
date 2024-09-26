import { CartItem } from '@/typings/typing';
import Image from 'next/image';
import CartControl from './CartControl';
const CartItemProduct = ({
  image,
  title,
  size,
  price,
  stock,
  amount,
  $id,
  color,
  brand,
}: CartItem) => {
  return (
    <div className=' flex gap-4 sm:gap-2 flex-col sm:flex-row items-center my-shadow p-2'>
      <div className='w-full sm:w-2/5 h-60 flex justify-center items-center relative'>
        <Image
          fill
          alt={title}
          src={image}
          className=' object-contain'
        />
      </div>
      <div className='w-full sm:w-3/5 flex flex-col gap-2'>
        <p className=' font-semibold  text-lg'>
          {title.length > 100 ? `${title.substring(0, 100)}...` : title}
        </p>
        <div className=' flex items-center justify-between'>
          <p
            className={` ${
              stock <= 0 && ' text-red-600'
            } text-gray-400  text-sm `}
          >
            {' '}
            {stock > 0 ? 'instock' : 'out of stock'}{' '}
          </p>
          {stock < 10 && (
            <div className=' flex flex-col'>
              <p className=' text-sm text-black/70'>
                Only <span className=' text-red-500'> {stock} items</span> left.
                Don&apos;t miss it
              </p>
            </div>
          )}
        </div>
        <div className=' flex items-center gap-2'>
          {size && <p className=' font-semibold caption-top'>size</p>}
          {size && <p>40</p>}
        </div>
        <div className=' flex items-center gap-2'>
          {brand && <p className=' font-semibold caption-top'>brand</p>}
          {brand && <p> {brand} </p>}
        </div>
        <div className=' flex gap-2 items-center justify-between'>
          <p>
            <span className=' font-semibold capitalize'>Kshs: </span>${' '}
            {price * amount}{' '}
          </p>
          <span className=' bg-green-100 py-1 px-2 rounded-lg text-xs text-gray-600'>
            {amount} <span className=''>x </span> {price}{' '}
          </span>
        </div>
        <CartControl
          $id={$id}
          color={color}
          amount={amount}
        />
      </div>
    </div>
  );
};

export default CartItemProduct;
