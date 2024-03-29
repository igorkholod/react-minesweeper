import { BaseBoard, BoardsState } from './models.ts';
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';
import { initializeDetailedBoardFromBase } from '../../utils/initializeDetailedBoardFromBase.ts';
import { revealCell } from '../../utils/revealCell.ts';

// Mocked uuids for predefined boards
const UUID_1 = '518dd6ab-82a4-4ed9-869f-2c997e705b65';
const UUID_2 = '2dac23d3-4493-4dbe-ada9-3b41ec800432';
const UUID_3 = 'ccb8a4d0-745e-4ec8-9240-7d04c9205134';

const initialState: BoardsState = {
  baseBoards: {
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
  },
  detailedBoards: {}
};

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    addBaseBoard: (state, action: PayloadAction<Omit<BaseBoard, 'uuid'>>) => {
      const uuid = crypto.randomUUID();
      state.baseBoards[uuid] = { ...action.payload, uuid };
    },
    initializeDetailedBoard: (state, action: PayloadAction<string>) => {
      const uuid = action.payload;
      state.detailedBoards[uuid] = initializeDetailedBoardFromBase(state.baseBoards[uuid]);
    },
    revealBoardCell: (state, action: PayloadAction<{ uuid: string; row: number, col: number }>) => {
      const board = state.detailedBoards[action.payload.uuid];
      revealCell({
        board,
        row: action.payload.row, col:
        action.payload.col
      });

      if (board.safeCellsNumber === 0) {
        board.isCleared = true;
      }
    },
    resetBoard: (state, action: PayloadAction<string>) => {
      state.detailedBoards[action.payload] = initializeDetailedBoardFromBase(state.baseBoards[action.payload]);
    }
  },
});

export const {
  addBaseBoard,
  initializeDetailedBoard,
  revealBoardCell,
  resetBoard
} = boardsSlice.actions;

export const selectBaseBoards = createSelector(
  (state: RootState) => state.boards.baseBoards,
  (state) => Object.values(state)
);

export const selectBaseBoardById = (uuid: string) => (state: RootState) => state.boards.baseBoards[uuid] ?? null;
export const selectDetailedBoardById = (uuid: string) => (state: RootState) => state.boards.detailedBoards[uuid] ?? null;

export default boardsSlice.reducer;