import api from '@/api/endpoint';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// API থেকে async data আনবে
export const fetchHomeData = createAsyncThunk('home/fetchData', async () => {
  const res = await fetch(api.endpoint.homedata);
  const data = await res.json();
  return data;
});

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    data: null,
    loaded: false,
  },
  reducers: {
    fetchHomeDataSuccess: (state, action) => {
      state.data = action.payload;
      state.loaded = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeData.pending, (state) => {
        state.loaded = false;
      })
      .addCase(fetchHomeData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loaded = true;
      });
  },
});


export const { fetchHomeDataSuccess } = homeSlice.actions;
export default homeSlice.reducer;
