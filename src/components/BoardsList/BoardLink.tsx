import * as React from 'react';
import { BaseBoard } from '../../store/boards/models.ts';
import ButtonLink from '../ButtonLink';

export interface BoardLinkProps {
  board: BaseBoard
}

const BoardLink: React.FC<BoardLinkProps> = ({ board }) => {
  return <ButtonLink link={`/game/${board.uuid}`}>
    {board.name} ({board.size}x{board.size})
  </ButtonLink>;
};

export default BoardLink;
