import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import CarReducer from "../features/Car/CarSlice"

export const store = configureStore({
  reducer: {
    Car: CarReducer,
  },
});
