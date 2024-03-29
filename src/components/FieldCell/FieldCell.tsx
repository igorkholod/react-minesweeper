import * as React from 'react';
import './FieldCell.css';
import MineSvg from './MineSvg.tsx';
import CellValue from './CellValue.tsx';
import { CellData } from '../../store/boards/models.ts';

export interface FieldCellProps {
  cell: CellData;
  reveal: (cell: { row: number; col: number }) => void;
  gameOver: boolean;
}

const FieldCell: React.FC<FieldCellProps> = ({ cell, reveal, gameOver }) => {
  const isEmpty = cell.value === 0 && !cell.isMine;
  const isRevealed = cell.isRevealed;

  const handleRevealCell = () => {
    if (gameOver) {
      return;
    }

    reveal({ row: cell.row, col: cell.column });
  };

  if (!isRevealed && !gameOver) {
    return <div className="cell hidden-cell" style={{ cursor: gameOver ? 'pointer' : 'default' }}
                onClick={handleRevealCell}/>;
  }

  if (isEmpty) {
    return <div className="cell empty-cell"/>;
  }

  return <div className="cell">
    {cell.isMine ? <MineSvg/> : <CellValue value={cell.value}/>}
  </div>;
};

export default FieldCell;
