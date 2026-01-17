import { Board } from "./components/Board";
import { Controls } from "./components/Controls";
import { Stats } from "./components/Stats";
import { useSolver } from "./hooks/useSolver";

export default function App() {
  const { board, result, solve, loading, error } = useSolver();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center gap-6 p-6">
      <h1 className="text-3xl font-bold">N-Queens Puzzle Solver</h1>

      <Controls onSolve={solve} />

      {loading && (
      <p className="text-blue-600 font-medium">
        Solving… please wait
      </p>
      )}

      {error && (
      <p className="text-red-600">
        {error}
      </p>
      )}


      {board && <Board board={board} />}

      {result && <Stats result={result} />}
    </div>
  );
}
