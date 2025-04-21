import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './slices/homeSlice';
import aboutReducer from './slices/aboutSlice';

const store = configureStore({
  reducer: {
    home: homeReducer,
    about: aboutReducer,
  },
});

export default store;