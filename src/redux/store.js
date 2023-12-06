import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../feature/profile/config/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
