export interface BaseBoard {
  uuid: string;
  size: number;
  mines: [number, number][]
  name: string;
}

export type BaseBoards = Record<string, BaseBoard>;