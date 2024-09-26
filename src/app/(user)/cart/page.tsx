'use client';
import Image from 'next/image';
import CartTotals from '@/components/cart/CartTotal';
import CartProducts from '@/components/cart/CartProduct';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/hooks';
const Cart = () => {
  const router = useRouter();
  const { cartItems: cart } = useAppSelector(state => state.cart);
  return (
    <div>
      {cart?.length === 0 ? (
        <div className=' h-[50vh] flex justify-center items-center gap-4 flex-col'>
          <Image
            width={200}
            height={200}
            alt='shopping cart image'
            src='/logo.png'
          />
          <button
            className=' bg-black py-2 px-4 rounded-lg cursor-pointer text-white'
            onClick={() => router.push('/')}
          >
            start shopping
          </button>
        </div>
      ) : (
        <div className=' flex justify-center'>
          <div className=' flex gap-4 p-2 max-w-[900px] w-full flex-col md:flex-row'>
            <CartProducts cart={cart} />
            <CartTotals />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
