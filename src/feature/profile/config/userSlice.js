import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from './userService';

// Get User from localSotarage
const user = JSON.parse(localStorage.getItem('user'));

// Register user
export const register = createAsyncThunk('user/register', async (paylod, thunkAPI) => {
  // console.log(paylod);
  try {
    return await userService.registerUser(paylod);
  } catch (err) {
    const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // handle REGISTER START
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.curentUser = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.curentUser = null;
      });
    // handle REGISTER END
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
