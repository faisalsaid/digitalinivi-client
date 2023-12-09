import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../feature/profile/config/userSlice';
import storeReducer from '../feature/store/config/storeSlice.js';

export const store = configureStore({
  reducer: {
    user: userReducer,
    store: storeReducer,
  },
});
