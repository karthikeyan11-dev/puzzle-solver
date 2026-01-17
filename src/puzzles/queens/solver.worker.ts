import { solveNQueens } from "./solver";

self.onmessage = (event) => {
  const { n, timeLimit } = event.data;

  try {
    const result = solveNQueens(n, timeLimit);
    self.postMessage({ type: "success", result });
  } catch (err) {
    self.postMessage({
      type: "error",
      message: err instanceof Error ? err.message : "Unknown error",
    });
  }
};
