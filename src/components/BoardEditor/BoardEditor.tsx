import * as React from 'react';
import { useEffect, useState } from 'react';
import { Snackbar, TextField } from '@mui/material';
import { initializeDetailedBoardFromBase } from '../../utils/initializeDetailedBoardFromBase.ts';
import { getDefaultBase, updateBaseBoardOnCellClick } from './utils.ts';
import CellGrid from '../CellGrid';
import { CellGridProps } from '../CellGrid/CellGrid.tsx';
import Button from '@mui/material/Button';
import { useAppDispatch } from '../../hooks/useAppDispatch.ts';
import { addBaseBoard } from '../../store/boards/boardsSlice.ts';
import { useNavigate } from 'react-router-dom';

export interface BoardEditorProps {}

const DEFAULT_SIZE = 4;
const DEFAULT_NAME = 'New board';

const BoardEditor: React.FC<BoardEditorProps> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [boardName, setBoardName] = useState(DEFAULT_NAME);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const [baseBoard, setBaseBoard] = useState(
    getDefaultBase(DEFAULT_NAME, DEFAULT_SIZE)
  );

  const onCellClick: CellGridProps['onCellClick'] = (cell) => {
    setBaseBoard((prev) => updateBaseBoardOnCellClick({ cell, baseBoard: prev }));
  };

  const handleAddBoard = () => {
    if (baseBoard.mines.length === 0) {
      setIsNotificationOpen(true);
      return;
    }
    dispatch(addBaseBoard(baseBoard));
    navigate('/');
  };

  useEffect(() => {
    setBaseBoard((prev) => ({ ...prev, name: boardName }));
  }, [boardName]);

  return <>
    <h1>Create a new board</h1>
    <TextField
      label="Board name"
      value={boardName}
      onChange={(e) => setBoardName(e.target.value)}
      error={boardName === ''}
      helperText={boardName === '' ? 'Required' : ''}
      style={{ marginBottom: '12px' }}
    />
    <TextField
      label="Board size"
      defaultValue={DEFAULT_SIZE}
      onKeyDown={(e) => {
        e.preventDefault();
      }}
      onChange={(e) => {
        setBaseBoard(getDefaultBase(boardName, parseInt(e.target.value, 10)));
      }}
      type="number"
      InputProps={{ inputProps: { min: 0, max: 12 } }}
      style={{ marginBottom: '12px' }}
    />
    <CellGrid board={initializeDetailedBoardFromBase(baseBoard)} onCellClick={onCellClick} isEditMode={true} />
    <Button style={{ marginTop: '12px' }} variant="contained" onClick={handleAddBoard}>Add a board</Button>
    <Snackbar
      open={isNotificationOpen}
      autoHideDuration={5000}
      onClose={() => setIsNotificationOpen(false)}
      message="Please plant at least one mine"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    />
  </>;
};

export default BoardEditor;
