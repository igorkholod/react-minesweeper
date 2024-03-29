export const getNeighboringIndexes = ({ row, col, size }: { row: number; col: number; size: number }) => {
  const indexes: [number, number][] = [];

  for (let rowOffset = -1; rowOffset <= 1; rowOffset++) {
    for (let colOffset = -1; colOffset <= 1; colOffset++) {
      if (rowOffset === 0 && colOffset === 0) {
        continue;
      }

      const checkRow = row + rowOffset;
      const checkCol = col + colOffset;

      const isValidRow = checkRow >= 0 && checkRow < size;
      const isValidCol = checkCol >= 0 && checkCol < size;

      if (isValidRow && isValidCol) {
        indexes.push([checkRow, checkCol]);
      }
    }
  }

  return indexes;
};