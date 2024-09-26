import { User } from '@/typings/typing';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UserSlice {
  currentUser: User | null;
}
const initialState: UserSlice = {
  currentUser: null,
};

// `createSlice` will infer the state type from the `initialState` argument
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, actions: PayloadAction<User>) => {
      localStorage.setItem('digitech-user', JSON.stringify(actions.payload));
      state.currentUser = actions.payload;
    },
    logout: state => {
      localStorage.setItem('digitech-user', JSON.stringify(null));
      state.currentUser = null;
    },
    getUser: state => {
      const user = localStorage.getItem('digitech-user');
      state.currentUser = user ? JSON.parse(user) : null; // Handle null case
    },
    updateUser: (state, action: PayloadAction<User | null>) => {
      localStorage.setItem('digitech-user', JSON.stringify(action.payload));
      state.currentUser = action.payload;
    },
  },
});

export const { login, logout, updateUser, getUser } = userSlice.actions;

export default userSlice.reducer;
