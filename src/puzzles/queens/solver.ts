import type { Board, SolveResult } from "./types";
import { isTimeExceeded } from "../../utils/timer";
import { getColumnOrder } from "./heuristics";

function isSafe(board: Board, row: number, col: number): boolean {
  for (let r = 0; r < row; r++) {
    const c = board[r];
    if (c === col) return false;
    if (Math.abs(c - col) === Math.abs(r - row)) return false;
  }
  return true;
}

export function solveNQueens(
  n: number,
  timeLimitMs: number
): SolveResult {
  const start = performance.now();
  let statesExplored = 0;
  let exceededTimeLimit = false;

  const board: Board = Array(n).fill(-1);
  const columnOrder = getColumnOrder(n);

  if (n > 14) {
  throw new Error(
    "Board size too large. This solver supports up to N = 14."
    );
    }


  function backtrack(row: number, enforceTime: boolean): boolean {
    statesExplored++;

    if (enforceTime && isTimeExceeded(start, timeLimitMs)) {
      exceededTimeLimit = true;
      return false;
    }

    if (row === n) return true;

    for (const col of columnOrder) {
      if (isSafe(board, row, col)) {
        board[row] = col;
        if (backtrack(row + 1, enforceTime)) return true;
        board[row] = -1;
      }
    }
    return false;
  }

  // Phase 1: Try within time limit
  let solved = backtrack(0, true);

  // Phase 2: If not solved, continue without time limit
  if (!solved) {
    solved = backtrack(0, false);
  }

  return {
    solution: [...board],
    statesExplored,
    timeTakenMs: performance.now() - start,
    exceededTimeLimit,
  };
}
