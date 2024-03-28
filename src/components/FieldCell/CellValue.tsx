import * as React from 'react';
import { getValueColor } from './utils.ts';

export interface CellValueProps {
  value: number;
}

const CellValue: React.FC<CellValueProps> = ({ value }) => {
  const color = getValueColor(value);

  return <span style={{ color, fontSize: '1.5rem', fontWeight: 'bold' }}>{value}</span>;
};

export default CellValue;
