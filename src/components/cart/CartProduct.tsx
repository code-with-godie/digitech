import { CartItem } from '@/typings/typing';
import CartItemProduct from '@/components/cart/CartItem';
const CartProducts = ({ cart }: { cart: CartItem[] }) => {
  return (
    <div className=' w-full md:w-4/5 flex flex-col gap-2'>
      {cart?.map((item, index) => (
        <CartItemProduct
          key={index}
          {...item}
        />
      ))}
    </div>
  );
};

export default CartProducts;
