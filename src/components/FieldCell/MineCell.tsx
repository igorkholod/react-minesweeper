import * as React from 'react';
import MineSvg from './MineSvg.tsx';
import './FieldCell.css';
import { BaseCellProps } from './types.ts';
import { getClickableProps } from './utils.ts';

export interface MineCellProps  extends BaseCellProps {}

const MineCell: React.FC<MineCellProps> = ({ handleClick, clickable }) => {
  return <div className="cell" {...getClickableProps(clickable, handleClick)}>
    <MineSvg />
  </div>;
};

export default MineCell;
