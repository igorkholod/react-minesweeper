import * as React from 'react';
import FieldCell from '../FieldCell';
import { DetailedBoard } from '../../store/boards/models.ts';
import { useAppDispatch } from '../../hooks/useAppDispatch.ts';
import { resetBoard, revealBoardCell } from '../../store/boards/boardsSlice.ts';
import { FieldCellProps } from '../FieldCell/FieldCell.tsx';
import { Alert } from '@mui/material';
import Button from '@mui/material/Button';
import './Board.css';

export interface BoardProps {
  board: DetailedBoard;
}

const Board: React.FC<BoardProps> = ({ board }) => {
  const dispatch = useAppDispatch();

  if (!board) {
    return 'Loading';
  }

  const revealCell: FieldCellProps['reveal'] = ({ row, col }) => {
    dispatch(revealBoardCell({ uuid: board.uuid, row, col }));
  };

  return <>
    {board.gameOver && <Alert style={{ marginBottom: '12px' }} severity="error" variant="filled">
      Game over
    </Alert>}
    <div
      className="board">
      <div className="cells"  style={{
        gridTemplateColumns: `repeat(${board.cells.length}, 1fr)`,
        gridTemplateRows: `repeat(${board.cells.length}, 1fr)`,
      }}>
        {board.cells.flatMap((row) => row.map((cell) => {
          return <FieldCell gameOver={board.gameOver} reveal={revealCell} cell={cell} key={`cell-${cell.row}-${cell.column}`}/>;
        }))}
      </div>
    </div>
    {board.gameOver &&
      <Button style={{ marginTop: '12px' }} variant="contained" onClick={() => dispatch(resetBoard(board.uuid))}>
        Try again
      </Button>
    }
  </>;
};

export default Board;
