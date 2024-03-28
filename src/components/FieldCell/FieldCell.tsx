import * as React from 'react';
import './FieldCell.css';
import { CellData } from '../../models';
import MineSvg from './MineSvg.tsx';
import CellValue from './CellValue.tsx';

export interface FieldCellProps {
  cell: CellData;
}

const FieldCell: React.FC<FieldCellProps> = ({ cell }) => {
  const isEmpty = cell.value === 0 && !cell.isMine;

  if (isEmpty) {
    return <div className="cell empty-cell" />;
  }

  return <div className="cell">
    {cell.isMine ? <MineSvg /> : <CellValue value={cell.value} />}
  </div>;
};

export default FieldCell;
