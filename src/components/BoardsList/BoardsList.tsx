import * as React from 'react';
import { useSelector } from 'react-redux';
import { selectBaseBoards } from '../../store/baseBoard/baseBoardsSlice.ts';
import BoardLink from './BoardLink.tsx';
import './BoardsList.css';

export interface BoardsListProps {}

const BoardsList: React.FC<BoardsListProps> = () => {
  const boards = useSelector(selectBaseBoards);

  return <>
    <h1>Please select a board</h1>
    <div className="list">
      {boards.map((board) => <BoardLink key={board.uuid} board={board} />)}
    </div>
  </>;
};

export default BoardsList;
