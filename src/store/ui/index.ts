import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './slices/counterSlice';

export const uiStore = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof uiStore.getState>;
export type AppDispatch = typeof uiStore.dispatch;