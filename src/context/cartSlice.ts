import { CartItem } from '@/typings/typing';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CartSlice {
  amount: number;
  total: number;
  cartItems: CartItem[];
}

// Define the initial state using that type
const initialState: CartSlice = {
  amount: 1,
  total: 0,
  cartItems: [],
};

// `createSlice` will infer the state type from the `initialState` argument
export const userSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<CartItem>) => {
      state.cartItems.push(payload);
    },
    setCartItem: (state, { payload }: PayloadAction<CartItem>) => {
      state.cartItems.push(payload);
    },
    removeCartItem: (state, { payload }: PayloadAction<string>) => {
      const newCart = state.cartItems.filter(
        cartItem => cartItem.$id !== payload
      );
      state.cartItems = newCart;
    },
    increase: (state, { payload }: PayloadAction<string>) => {
      const newCart = state.cartItems.map(cartItem => {
        if (cartItem.$id === payload) {
          cartItem.amount += 1;
          return cartItem;
        }
        return cartItem;
      });
      state.cartItems = newCart;
    },
    decrease: (state, { payload }: PayloadAction<string>) => {
      const newCart = state.cartItems.map(cartItem => {
        if (cartItem.$id === payload) {
          cartItem.amount -= 1;
          return cartItem;
        }
        return cartItem;
      });
      state.cartItems = newCart;
    },
    getCartTotal: state => {
      const { total, amount }: { total: number; amount: number } =
        state.cartItems.reduce(
          (cartTotal, cartItem) => {
            const cartItemCost = cartItem.price * cartItem.amount;
            cartTotal.total += cartItemCost;
            cartTotal.amount += cartItem.amount;
            return cartTotal;
          },
          { total: 0, amount: 0 }
        );
      state.amount = amount;
      state.total = parseFloat(total.toFixed(2));
      localStorage.setItem('digitech-cart', JSON.stringify(state));
    },
    clearCart: state => {
      console.log('clear cart called');
      state.amount = 0;
      state.cartItems = [];
      state.total = 0;
    },
  },
});

export const {
  addToCart,
  removeCartItem,
  increase,
  decrease,
  getCartTotal,
  setCartItem,
  clearCart,
} = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default userSlice.reducer;
