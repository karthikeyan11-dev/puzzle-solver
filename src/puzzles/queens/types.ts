export type Board = number[];

export interface SolveResult {
  solution: Board;
  statesExplored: number;
  timeTakenMs: number;
  exceededTimeLimit: boolean;
}
