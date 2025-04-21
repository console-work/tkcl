

import api from '@/api/endpoint';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchAboutData = createAsyncThunk('about/fetchData', async () => {
  const res = await fetch(api.endpoint.aboutdata);
  const data = await res.json();
  console.log(data) 
  return data;
});


const aboutSlice = createSlice({
  name: 'about',
  initialState: {
    data: null,
    loaded: false,
  },
  reducers: {
    fetchAboutDataSuccess: (state, action) => {
      state.data = action.payload;
      state.loaded = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAboutData.pending, (state) => {
        state.loaded = false;
      })
      .addCase(fetchAboutData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loaded = true;
      });
  },
});


export const { fetchAboutDataSuccess } = aboutSlice.actions;
export default aboutSlice.reducer;
