'use client';
import { useAppSelector } from '@/hooks';
import { ShoppingCart } from '@mui/icons-material';

const CartTotals = () => {
  const { total } = useAppSelector(state => state.cart);
  const handleCheckout = () => {
    console.log('checkout...');
  };
  return (
    <div className=' w-full md:w-2/5 shadow p-2 flex flex-col gap-4 justify-between h-60  sticky top-6'>
      <div className=' flex gap-2 flex-col'>
        <h1 className=' font-semibold text-2xl capitalize'>sub-totals</h1>
        <p className=' text-lg'>$ {total} </p>
      </div>
      <div className=' flex flex-col gap-2'>
        <p className=' text-sm text-gray-400'>
          shipping and taxes are calculated at shipping
        </p>
        <button
          className=' bg-black p-2  text-white font-serif capitalize text-lg flex items-center gap-2 justify-center'
          onClick={handleCheckout}
        >
          <ShoppingCart />
          checkout
        </button>
      </div>
    </div>
  );
};

export default CartTotals;
