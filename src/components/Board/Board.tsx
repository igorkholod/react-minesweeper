import * as React from 'react';
import FieldCell from '../FieldCell';
import { getBoardFromConfig } from './utils.ts';
import { BaseBoard } from '../../store/baseBoard/models.ts';

export interface BoardProps {
  baseBoard: BaseBoard;
}

const Board: React.FC<BoardProps> = ({ baseBoard }) => {
  const board = getBoardFromConfig(baseBoard);

  return <div
    style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${baseBoard.size}, 1fr)`,
      gridTemplateRows: `repeat(${baseBoard.size}, 1fr)`,
      gap: '4px'
    }}>
    {board.flatMap((row) => row.map((cell) => {
      return <FieldCell cell={cell} key={`cell-${cell.row}-${cell.column}`}/>;
    }))}
  </div>;
};

export default Board;
