import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './ui/slices/counterSlice';


const rootReducer = {
  ui: counterReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;