import { configureStore } from '@reduxjs/toolkit';
import { financeSlice } from './financeSlice';

export const store = configureStore({
  reducer: {
    finance: financeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
