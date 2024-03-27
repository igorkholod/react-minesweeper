import * as React from 'react';
import FieldCell from '../FieldCell';
import { BoardConfig } from '../../models';
import { getBoardFromConfig } from './utils.ts';

export interface BoardProps {}

const Board: React.FC<BoardProps> = () => {
  const boardConfig: BoardConfig = {
    size: 4,
    mines: [[0, 0], [2, 2], [3, 2]]
  };

  console.log(getBoardFromConfig(boardConfig));

  // 14

  return <div
    style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${boardConfig.size}, 1fr)`,
      gridTemplateRows: `repeat(${boardConfig.size}, 1fr)`,
      gap: '4px'
  }}>
    {Array.from({ length: Math.pow(boardConfig.size, 2) }).map((_, i) => {
      const row = Math.floor((i + 1) / boardConfig.size);
      const column = (i + 1) % boardConfig.size;

      return <FieldCell key={`cell-${row}-${column}`} />;
    })}
  </div>;
};

export default Board;
