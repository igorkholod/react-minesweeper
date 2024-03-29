import * as React from 'react';
import './FieldCell.css';
import { BaseCellProps } from './types.ts';
import { getClickableProps } from './utils.ts';

export interface EmptyCellProps extends BaseCellProps {}

const EmptyCell: React.FC<EmptyCellProps> = ({ clickable, handleClick }) => {
  return <div className="cell empty-cell" {...getClickableProps(clickable, handleClick)} />;
};

export default EmptyCell;
