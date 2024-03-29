import { BaseBoard, CellData } from '../../store/boards/models.ts';

export const getDefaultBase = (name: string, size: number): BaseBoard => {
  return {
    uuid: '',
    name,
    mines: [],
    size,
  };
};

const plantMine = ({ baseBoard, col, row }: { baseBoard: BaseBoard; row: number; col: number }): void => {
  baseBoard.mines.push([row, col]);
};

const removeMine = ({ baseBoard, row, col }: { baseBoard: BaseBoard; row: number; col: number}): void => {
  baseBoard.mines = baseBoard.mines.filter((mine) => !(mine[0] === row && mine[1] === col) );
};

export const updateBaseBoardOnCellClick = ({ baseBoard, cell }: { baseBoard: BaseBoard; cell: CellData }): BaseBoard => {
  const updatedBaseBoard = structuredClone(baseBoard);

  if (cell.isMine) {
    removeMine({ baseBoard: updatedBaseBoard, row: cell.row, col: cell.column });
    return updatedBaseBoard;
  }

  plantMine({ baseBoard: updatedBaseBoard, row: cell.row, col: cell.column });
  return updatedBaseBoard;
};