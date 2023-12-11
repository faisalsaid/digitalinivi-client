import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import storeServices from './storeService.js';
import { toast } from 'react-toastify';

// Get all store
export const fetchAllStore = createAsyncThunk('store/fetchAllStore', async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().user.curentUser.token;
    return await storeServices.getAllStore(token);
  } catch (error) {
    const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Get Store By Id
export const getOneStore = createAsyncThunk('store/getOneStore', async (storeId, thunkAPI) => {
  // console.log('getOneStore', storeId);
  try {
    const token = thunkAPI.getState().user.curentUser.token;
    return await storeServices.getStoreById(storeId, token);
  } catch (error) {
    const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// handle create new store
export const createStore = createAsyncThunk('store/createStore', async (payload, thunkAPI) => {
  try {
    const token = thunkAPI.getState().user.curentUser.token;
    return await storeServices.createStore(payload, token);
  } catch (error) {
    const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// handle update store
export const updateStore = createAsyncThunk('store/updateStore', async (data, thunkAPI) => {
  try {
    const token = thunkAPI.getState().user.curentUser.token;
    return await storeServices.updateStore(data, token);
  } catch (error) {
    const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// handle delete store
export const deleteStore = createAsyncThunk('store/deleteStore', async (_id, thunkAPI) => {
  try {
    const token = thunkAPI.getState().user.curentUser.token;
    return await storeServices.deleteStore(_id, token);
  } catch (error) {
    const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const initialState = {
  storeList: [],
  theStore: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

const storeSlice = createSlice({
  name: 'store',
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
      // handle GET ALL STORE START
      .addCase(fetchAllStore.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllStore.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.storeList = action.payload;
      })
      .addCase(fetchAllStore.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.storeList = [];
      })
      // handle GET ALL STORE END

      // handle GET ONE STORE START
      .addCase(getOneStore.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOneStore.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.theStore = action.payload;
      })
      .addCase(getOneStore.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.theStore = {};
      })
      // handle GET ONE STORE END

      // handle ADD ONE STORE START
      .addCase(createStore.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createStore.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.isLoading = false;
        if (action.payload.message || action.payload.stack) {
          state.isSuccess = false;
          toast(`Gagal, Coba Nama Toko Lain`);
        } else {
          state.isSuccess = true;
          state.storeList.push(action.payload);
          toast(`Berhasil Menambah Toko `);
        }
      })
      .addCase(createStore.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.theStore = {};
      })
      // handle ADD ONE STORE END

      // handle update store start
      .addCase(updateStore.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateStore.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.storeList = state.storeList.map((store) => (store._id === action.payload._id ? { ...store, ...action.payload } : store));
        toast(`Berhasil Perbarui Toko `);
      })
      .addCase(updateStore.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
        console.log(action);
      })
      // handle update store end

      // handle delete Start
      .addCase(deleteStore.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteStore.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.storeList = state.storeList.filter((store) => store._id !== action.payload);
        toast(`Berhasil Hapus Toko`);
      })
      .addCase(deleteStore.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      });
    // handle delete End
  },
});

export const { reset } = storeSlice.actions;
export default storeSlice.reducer;
