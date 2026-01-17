import type { Board, SolveResult } from "./types";

export function solveNQueens(
  n: number,
  timeLimitMs: number
): SolveResult {
  const startTime = performance.now();
  let statesExplored = 0;
  const steps: Board[] = [];

  const board: Board = Array(n).fill(-1);

  function isSafe(row: number, col: number): boolean {
    for (let r = 0; r < row; r++) {
      const c = board[r];
      if (
        c === col ||
        Math.abs(c - col) === Math.abs(r - row)
      ) {
        return false;
      }
    }
    return true;
  }

  function backtrack(row: number): boolean {
    statesExplored++;

    if (performance.now() - startTime > timeLimitMs) {
      return false;
    }

    if (row === n) {
      steps.push([...board]);
      return true;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        board[row] = col;
        steps.push([...board]);

        if (backtrack(row + 1)) return true;

        board[row] = -1;
      }
    }

    return false;
  }

  const success = backtrack(0);

  return {
    solution: success ? board : null,
    steps,
    statesExplored,
    timeTakenMs: performance.now() - startTime,
  };
}
