import { BaseBoard, CellData, DetailedBoard } from '../store/boards/models.ts';
import { getNeighboringIndexes } from './getNeighboringIndexes.ts';

type Cells = DetailedBoard['cells']
const initCells = (size: number): Cells => {
  const cells: Cells = [];

  for (let row = 0; row < size; row++) {
    const rowData: CellData[] = [];

    for (let col = 0; col < size; col++) {
      rowData.push({ row, column: col, value: 0, isMine: false, isRevealed: false });
    }

    cells.push(rowData);
  }

  return cells;
};

const initMines = (cells: Cells, mines: [number, number][]): Cells => {
  const plantedBoard = structuredClone(cells);

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

export const initializeDetailedBoardFromBase = (config: BaseBoard): DetailedBoard => {
  const { size, mines, uuid, name } = config;

  const board = initCells(size);

  return {
    uuid: uuid,
    name: name,
    cells: initMines(board, mines),
    gameOver: false,
    safeCellsNumber: Math.pow(size, 2) - mines.length,
    isCleared: false,
  };
};