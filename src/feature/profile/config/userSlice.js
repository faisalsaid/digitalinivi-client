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

// User Login
export const login = createAsyncThunk('user/login', async (user, thunkAPI) => {
  try {
    return await userService.login(user);
  } catch (err) {
    const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const initialState = {
  curentUser: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

const userSlice = createSlice({
  name: 'user',
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
      })
      // handle REGISTER END

      // handle LOGIN START
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.curentUser = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.curentUser = null;
      });
    // handle LOGIN END
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
