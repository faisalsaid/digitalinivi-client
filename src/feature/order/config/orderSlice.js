import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import orderServices from './orderServices.js';
import { toast } from 'react-toastify';

// Create new order
export const createOrder = createAsyncThunk('store/createOrder', async (payload, thunkAPI) => {
  console.log(payload);
  //   try {
  //     const token = thunkAPI.getState().user.curentUser.token;
  //     return await orderServices.createOrder(payload, token);
  //   } catch (error) {
  //     const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();
  //     return thunkAPI.rejectWithValue(message);
  //   }
});

const initialState = {
  listOrder: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder

      // handle ADD ONE STORE START
      .addCase(createOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.isLoading = false;
        if (action.payload.message || action.payload.stack) {
          state.isSuccess = false;
          toast(`Gagal, Coba Nama Toko Lain`);
        } else {
          state.isSuccess = true;
          state.listOrder.push(action.payload);
          toast(`Berhasil Menambah Toko `);
        }
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.theStore = {};
      });
    // handle ADD ONE STORE END
  },
});

export const { reset } = orderSlice.actions;
export default orderSlice.reducer;
