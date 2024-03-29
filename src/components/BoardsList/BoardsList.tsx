import * as React from 'react';
import { useSelector } from 'react-redux';
import { selectBaseBoards } from '../../store/boards/boardsSlice.ts';
import BoardLink from './BoardLink';
import './BoardsList.css';
import ButtonLink from '../ButtonLink';

export interface BoardsListProps {}

const BoardsList: React.FC<BoardsListProps> = () => {
  const boards = useSelector(selectBaseBoards);

  return <>
    <h1>Please select a board</h1>
    <div className="list">
      {boards.map((board) => <BoardLink key={board.uuid} board={board} />)}
    </div>
    <p>Or</p>
    <ButtonLink link="/create">Create a new one</ButtonLink>
  </>;
};

export default BoardsList;
