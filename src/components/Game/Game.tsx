import * as React from 'react';
import Board from '../Board';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { initializeDetailedBoard, selectDetailedBoardById } from '../../store/boards/boardsSlice.ts';
import { useAppDispatch } from '../../hooks/useAppDispatch.ts';

export interface GameProps {
}

const Game: React.FC<GameProps> = () => {
  const { uuid } = useParams();
  const dispatch = useAppDispatch();
  
  const detailedBoard = useSelector(selectDetailedBoardById(uuid!));

  if (!detailedBoard) {
    dispatch(initializeDetailedBoard(uuid!));
  }

  return <>
    <h1>React minesweeper</h1>
    <Board board={detailedBoard}/>
  </>;
};

export default Game;
