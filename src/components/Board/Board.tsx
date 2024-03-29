import * as React from 'react';
import { DetailedBoard } from '../../store/boards/models.ts';
import { useAppDispatch } from '../../hooks/useAppDispatch.ts';
import { resetBoard, revealBoardCell } from '../../store/boards/boardsSlice.ts';
import { FieldCellProps } from '../FieldCell/FieldCell.tsx';
import { Alert } from '@mui/material';
import Button from '@mui/material/Button';
import './Board.css';
import CellGrid from '../CellGrid';

export interface BoardProps {
  board: DetailedBoard;
}

const Board: React.FC<BoardProps> = ({ board }) => {
  const dispatch = useAppDispatch();

  if (!board) {
    return 'Loading';
  }

  const revealCell: FieldCellProps['onCellClick'] = (cell) => {
    dispatch(revealBoardCell({ uuid: board.uuid, row: cell.row, col: cell.column }));
  };

  return <>
    {board.gameOver && <Alert style={{ marginBottom: '12px' }} severity="error" variant="filled">
      Game over
    </Alert>}
    {board.isCleared && <Alert style={{ marginBottom: '12px' }} severity="success" variant="filled">
      You win
    </Alert>}
    <CellGrid board={board} onCellClick={revealCell} />
    {(board.gameOver || board.isCleared) &&
      <Button style={{ marginTop: '12px' }} variant="contained" onClick={() => dispatch(resetBoard(board.uuid))}>
        {board.gameOver ? 'Try again' : 'Reset board'}
      </Button>
    }
  </>;
};

export default Board;
