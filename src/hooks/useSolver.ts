import { useEffect, useRef, useState } from "react";
import type { SolveResult } from "../puzzles/queens/types";

export function useSolver() {
  const workerRef = useRef<Worker | null>(null);
  const [result, setResult] = useState<SolveResult | null>(null);
  const [board, setBoard] = useState<number[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    workerRef.current = new Worker(
      new URL("../puzzles/queens/solver.worker.ts", import.meta.url),
      { type: "module" }
    );

    workerRef.current.onmessage = (e) => {
      if (e.data.type === "success") {
        setResult(e.data.result);
        setBoard(e.data.result.solution);
      } else {
        setError(e.data.message);
      }
      setLoading(false);
    };

    return () => {
      workerRef.current?.terminate();
    };
  }, []);

  function solve(n: number, timeLimit: number) {
    setLoading(true);
    setError(null);
    setResult(null);
    setBoard(null);

    workerRef.current?.postMessage({ n, timeLimit });
  }

  return { result, board, loading, error, solve };
}
