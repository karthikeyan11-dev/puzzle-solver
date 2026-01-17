import { useState } from "react";
import { solveNQueens } from "../puzzles/queens/solver";

export function useSolver() {
  const [result, setResult] = useState<any>(null);

  function solve(n: number, timeLimit: number) {
    const res = solveNQueens(n, timeLimit);
    setResult(res);
  }

  return { result, solve };
}
