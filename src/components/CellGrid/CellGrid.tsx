import * as React from 'react';
import FieldCell from '../FieldCell';
import { CellData, DetailedBoard } from '../../store/boards/models.ts';

export interface CellGridProps {
  board: DetailedBoard;
  onCellClick: (cell: CellData) => void;
  isEditMode?: boolean;
}

const CellGrid: React.FC<CellGridProps> = ({ board, onCellClick, isEditMode = false }) => {
  return <div className="board">
    <div className="cells" style={{
      gridTemplateColumns: `repeat(${board.cells.length}, 1fr)`,
      gridTemplateRows: `repeat(${board.cells.length}, 1fr)`,
    }}>
      {board.cells.flatMap((row) => row.map((cell) => {
        return <FieldCell gameOver={isEditMode ? false : board.gameOver}
                          isCleared={isEditMode ? true : board.isCleared}
                          onCellClick={onCellClick} cell={cell}
                          key={`cell-${cell.row}-${cell.column}`}
                          allowAnyCellClick={isEditMode}
        />;
      }))}
    </div>
  </div>;
};

export default CellGrid;
