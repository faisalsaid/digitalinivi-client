import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  user: {},
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
    builder;
    // handle add menu
    // .addCase(createNewMenu.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(createNewMenu.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.isSuccess = true;
    //   state.listMenu.push(action.payload);
    //   toast(`Add ${action.payload.title} success`);
    // })
    // .addCase(createNewMenu.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.isError = true;
    //   state.message = action.error.message;
    // })
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
