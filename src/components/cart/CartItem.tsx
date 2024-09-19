import { CartItem } from '@/typings/typing';
import Image from 'next/image';
const CartItemProduct = ({ image, title, size, price, stock }: CartItem) => {
  return (
    <div className=' flex gap-2 items-center my-shadow'>
      <div className=' flex-1 h-60 flex justify-center items-center relative'>
        <Image
          fill
          alt={title}
          src={image}
          className=' object-contain'
        />
      </div>
      <div className=' flex-1'>
        <p>{title.length > 100 ? `${title.substring(0, 100)}...` : title}</p>
        <div>
          {size && <p>size</p>}
          {size && <p>40</p>}
        </div>
        <div>
          <p>Kshs.</p>
          <p> {price} </p>
        </div>
        <p> {stock > 0 ? 'instock' : 'out of stock'} </p>
        {/* <CartControls
          saved={saved}
          addToFavourite={addToFavourite}
          id={$id}
          amount={amount}
        /> */}
      </div>
    </div>
  );
};

export default CartItemProduct;
