import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    data: null,
    loaded: false
  },
  reducers: {
    fetchHomeDataSuccess: (state, action) => {
      state.data = action.payload;
      state.loaded = true;
    }
  }
});

export const { fetchHomeDataSuccess } = homeSlice.actions;
export default homeSlice.reducer;