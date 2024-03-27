import * as React from 'react';
import Board from '../Board';

export interface GameProps {}

const Game: React.FC<GameProps> = () => {
  return <>
    <h1>React minesweeper</h1>
    <Board />
  </>;
};

export default Game;
