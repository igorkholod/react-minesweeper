import * as React from 'react';
import { getClickableProps, getValueColor } from './utils.ts';
import { BaseCellProps } from './types.ts';

export interface ValueCellProps extends BaseCellProps {
  value: number;
}

const ValueCell: React.FC<ValueCellProps> = ({ value, handleClick, clickable }) => {
  const color = getValueColor(value);

  return <div className="cell" {...getClickableProps(clickable, handleClick)}>
    <span style={{ color, fontSize: '1.5rem', fontWeight: 'bold' }}>{value}</span>
  </div>;
};

export default ValueCell;
