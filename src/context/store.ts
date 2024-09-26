import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import appReducer from './appSlice';
import cartReducer from './cartSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: 'digitech-root',
  storage,
};

export const makeStore = () => {
  const rootReducers = combineReducers({
    user: userReducer,
    app: appReducer,
    cart: cartReducer,
  });
  const persistedReducer = persistReducer(persistConfig, rootReducers);
  return configureStore({ reducer: persistedReducer });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
