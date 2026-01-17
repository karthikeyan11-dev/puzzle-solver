export type Board = number[]; 

export interface SolveResult {
  solution: Board | null;
  steps: Board[];
  statesExplored: number;
  timeTakenMs: number;
}
