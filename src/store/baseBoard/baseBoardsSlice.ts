import { BaseBoard, BaseBoards } from './models.ts';
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';

// Mocked uuids for predefined boards
const UUID_1 = '518dd6ab-82a4-4ed9-869f-2c997e705b65';
const UUID_2 = '2dac23d3-4493-4dbe-ada9-3b41ec800432';
const UUID_3 = 'ccb8a4d0-745e-4ec8-9240-7d04c9205134';

const initialState: BaseBoards = {
  [UUID_1]: {
    uuid: UUID_1,
    size: 4,
    mines: [[0, 0], [2, 2], [3, 2]],
    name: 'Test board 1'
  },
  [UUID_2]: {
    uuid: UUID_2,
    size: 8,
    mines: [[0, 1], [0, 6], [1, 5], [3, 3], [4, 5], [6, 7], [7, 7]],
    name: 'Test board 2'
  },
  [UUID_3]: {
    uuid: UUID_3,
    size: 10,
    mines: [[0, 4], [2, 3], [3, 1], [4, 8], [5, 0], [5, 5], [5, 6], [6, 8], [9, 9]],
    name: 'Test board 3'
  }
};

export const baseBoardsSlice = createSlice({
  name: 'baseBoards',
  initialState,
  reducers: {
    addBaseBoard: (state, action: PayloadAction<Omit<BaseBoard, 'uuid'>>) => {
      const uuid = crypto.randomUUID();
      state[uuid] = { uuid, ...action.payload };
    }
  },
});

export const { addBaseBoard } = baseBoardsSlice.actions;

export const selectBaseBoards = createSelector(
  (state: RootState) => state.baseBoards,
  (state) => Object.values(state)
);
export const selectBaseBoardById = (uuid: string) => (state: RootState) => state.baseBoards[uuid] ?? null;

export default baseBoardsSlice.reducer;