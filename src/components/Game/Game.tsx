import * as React from 'react';
import Board from '../Board';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectBaseBoardById } from '../../store/baseBoard/baseBoardsSlice.ts';

export interface GameProps {}

const Game: React.FC<GameProps> = () => {
  const { uuid } = useParams();

  const baseBoard = useSelector(selectBaseBoardById(uuid ?? ''));

  return <>
    <h1>React minesweeper</h1>
    <Board baseBoard={baseBoard} />
  </>;
};

export default Game;
