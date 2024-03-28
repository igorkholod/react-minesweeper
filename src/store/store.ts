import { configureStore } from '@reduxjs/toolkit';
import baseBoardsReducer from '../store/baseBoard/baseBoardsSlice.ts';

export const store = configureStore({
  reducer: {
    baseBoards: baseBoardsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
