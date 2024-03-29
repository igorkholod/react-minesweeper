import * as React from 'react';
import './FieldCell.css';
import ValueCell from './ValueCell.tsx';
import { CellData } from '../../store/boards/models.ts';
import HiddenCell from './HiddenCell.tsx';
import EmptyCell from './EmptyCell.tsx';
import MineCell from './MineCell.tsx';

export interface FieldCellProps {
  cell: CellData;
  onCellClick: (cell: CellData) => void;
  gameOver: boolean;
  isCleared: boolean;
  allowAnyCellClick?: boolean;
}

const FieldCell: React.FC<FieldCellProps> = ({ cell, onCellClick, gameOver, isCleared, allowAnyCellClick = false }) => {
  const isEmpty = cell.value === 0 && !cell.isMine;
  const isRevealed = cell.isRevealed || isCleared;
  const boundOnCellClick = () => onCellClick(cell);

  if (!isRevealed && !gameOver) {
    return <HiddenCell clickable={true} handleClick={boundOnCellClick} />;
  }

  if (isEmpty) {
    return <EmptyCell clickable={allowAnyCellClick} handleClick={boundOnCellClick} />;
  }

  if (cell.isMine) {
    return <MineCell clickable={allowAnyCellClick} handleClick={boundOnCellClick} />;
  }

  return <ValueCell value={cell.value} clickable={allowAnyCellClick} handleClick={boundOnCellClick} />;
};

export default FieldCell;
