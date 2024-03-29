import { configureStore } from '@reduxjs/toolkit';
import boardsReducer from '../store/boards/boardsSlice.ts';
import { BoardsState } from './boards/models.ts';

export type RootState = {
  boards: BoardsState
};


const STORAGE_KEY = 'reduxState';
export const saveLocalStorageState = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, serializedState);
  } catch (err) {
    console.error(err);
  }
};

export const loadInitialState = (): RootState | undefined => {
  try {
    const serializedLocalStorageState =
      localStorage.getItem(STORAGE_KEY) ?? 'null';

    const initialState = JSON.parse(serializedLocalStorageState);

    if (initialState === null) {
      return undefined;
    }

    return initialState;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};


const store = configureStore({
  preloadedState: loadInitialState(),
  reducer: {
    boards: boardsReducer
  },
});

store.subscribe(() => {
  const state = store.getState();
  saveLocalStorageState(state);
});

export { store };
export type AppDispatch = typeof store.dispatch;
