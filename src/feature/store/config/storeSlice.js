import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import storeServices from './storeService';

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

const initialState = {
  storeList: [],
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
      });
    // handle GET ALL STORE END
  },
});

export const { reset } = storeSlice.actions;
export default storeSlice.reducer;
