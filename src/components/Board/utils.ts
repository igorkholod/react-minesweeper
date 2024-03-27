import { BoardConfig, CellData } from '../../models';

export type Board = CellData[][];

const initBoard = (size: number): Board => {
  const board: Board = [];

  for (let row = 0; row < size; row++) {
    const rowData: CellData[] = [];

    for (let col = 0; col < size; col++) {
      rowData.push({ row, column: col, value: 0, isMine: false });
    }

    board.push(rowData);
  }

  return board;
};

const getNeighboringIndexes = ({ row, col, size }: {row: number; col: number; size: number}) => {
  const indexes: [number, number][] = [];

  for (let rowOffset = -1; rowOffset <= 1; rowOffset++) {
    for (let colOffset = -1; colOffset <= 1; colOffset++) {
      if (rowOffset === 0 && colOffset === 0) {
        continue;
      }

      const checkRow = row + rowOffset;
      const checkCol = col + colOffset;

      const isValidRow = checkRow >= 0 && checkRow < size;
      const isValidCol = checkCol >= 0 && checkCol < size;

      if (isValidRow && isValidCol) {
        indexes.push([checkRow, checkCol]);
      }
    }
  }

  return indexes;
};

const initMines = (board: Board, mines: [number, number][]): Board => {
  const plantedBoard = structuredClone(board);

  mines.forEach((mine) => {
    const [mineRow, mineColumn] = mine;

    plantedBoard[mineRow][mineColumn].isMine = true;

    getNeighboringIndexes({ row: mineRow, col: mineColumn, size: plantedBoard.length }).forEach((neighbor) => {
      const [neighborRow, neighborColumn] = neighbor;
      plantedBoard[neighborRow][neighborColumn].value += 1;
    });
  });

  return plantedBoard;
};

export const getBoardFromConfig = (config: BoardConfig): Board => {
  const { size, mines } = config;

  const board = initBoard(size);
  
  return initMines(board, mines);
};