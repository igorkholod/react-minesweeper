import * as React from 'react';
import { BaseBoard } from '../../store/baseBoard/models.ts';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export interface BoardLinkProps {
  board: BaseBoard;
}

const BoardLink: React.FC<BoardLinkProps> = ({ board }) => {
  const navigate = useNavigate();

  return <Button variant="contained" onClick={() => navigate(`/game/${board.uuid}`)}>
    {board.name} ({board.size}x{board.size})
  </Button>;
};

export default BoardLink;
