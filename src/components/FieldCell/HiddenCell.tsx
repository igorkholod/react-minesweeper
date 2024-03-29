import * as React from 'react';
import './FieldCell.css';
import { BaseCellProps } from './types.ts';
import { getClickableProps } from './utils.ts';

export interface HiddenCellProps  extends BaseCellProps {}

const HiddenCell: React.FC<HiddenCellProps> = ({ clickable, handleClick }) => {
  return <div className="cell hidden-cell" {...getClickableProps(clickable, handleClick)} />;
};

export default HiddenCell;
