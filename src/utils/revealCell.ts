import { DetailedBoard } from '../store/boards/models.ts';
import { getNeighboringIndexes } from './getNeighboringIndexes.ts';

// The function is mutating original data
export const revealCell = ({ board, col, row }: { board: DetailedBoard; row: number; col: number }) => {
  const cells = board.cells;
  const cell = cells[row][col];

  cell.isRevealed = true;

  if (cell.isMine) {
    board.gameOver = true;
    return;
  }

  board.safeCellsNumber -= 1;

  if (cell.value !== 0) {
    return;
  }

  const neighbors = getNeighboringIndexes({ row, col, size: cells.length });
  neighbors.forEach(([neighborRow, neighborCol]) => {
    const neighborCell = cells[neighborRow][neighborCol];

    if (neighborCell.isRevealed) {
      return;
    }

    if (neighborCell.value !== 0) {
      neighborCell.isRevealed = true;
      board.safeCellsNumber -= 1;
    }

    if (!neighborCell.isMine && !neighborCell.isRevealed) {
      revealCell({ board, col: neighborCol, row: neighborRow });
    }
  });
};