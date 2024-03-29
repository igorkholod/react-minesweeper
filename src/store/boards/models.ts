export interface BaseBoard {
  uuid: string;
  size: number;
  mines: [number, number][]
  name: string;
}

export type BaseBoardsById = Record<string, BaseBoard>;

export interface CellData {
  row: number;
  column: number;
  value: number;
  isMine: boolean;
  isRevealed: boolean;
}

export interface DetailedBoard {
  uuid: string;
  name: string;
  cells: CellData[][];
  gameOver: boolean;
  safeCellsNumber: number;
  isCleared: boolean;
}

export type DetailedBoardsById = Record<string, DetailedBoard>

export interface BoardsState {
  baseBoards: BaseBoardsById;
  detailedBoards: DetailedBoardsById;
}