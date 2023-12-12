import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import orderServices from './orderServices.js';
import { toast } from 'react-toastify';

// Create new order
export const createOrder = createAsyncThunk('store/createOrder', async (payload, thunkAPI) => {
  //   console.log(payload);
  try {
    const token = thunkAPI.getState().user.curentUser.token;
    return await orderServices.createOrder(payload, token);
  } catch (error) {
    const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// fetch all order
export const fetchAllOrder = createAsyncThunk('store/fetchAllOrder', async (store_id, thunkAPI) => {
  //   console.log(store_id);
  try {
    const token = thunkAPI.getState().user.curentUser.token;
    return await orderServices.getAllOrder(store_id, token);
  } catch (error) {
    const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const deleteOrderById = createAsyncThunk('store/deleteOrderById', async (store_id, thunkAPI) => {
  console.log(store_id);
  try {
    const token = thunkAPI.getState().user.curentUser.token;
    return await orderServices.deleteOneById(store_id, token);
  } catch (error) {
    const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const updateOrderById = createAsyncThunk('store/updateOrderById', async (order, thunkAPI) => {
  // console.log(order);
  try {
    const token = thunkAPI.getState().user.curentUser.token;
    return await orderServices.updateOrderById(order, token);
  } catch (error) {
    const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();
    return thunkAPI.rejectWithValue(message);
  }
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
      })
      // handle ADD ONE STORE END

      // handle GET ALL STORE START
      .addCase(fetchAllOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.listOrder = action.payload;
      })
      .addCase(fetchAllOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      // handle GET ALL STORE END

      // handle delete Start
      .addCase(deleteOrderById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteOrderById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.listOrder = state.listOrder.filter((store) => store._id !== action.payload);
        toast(`Berhasil Hapus Order`);
      })
      .addCase(deleteOrderById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      // handle delete End

      // handle update store start
      .addCase(updateOrderById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateOrderById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.listOrder = state.listOrder.map((order) => (order._id === action.payload._id ? { ...order, ...action.payload } : order));
        toast(`Berhasil Perbarui Toko `);
      })
      .addCase(updateOrderById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
        console.log(action);
      });
    // handle update store end
  },
});

export const { reset } = orderSlice.actions;
export default orderSlice.reducer;
