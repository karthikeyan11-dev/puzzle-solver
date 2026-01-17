import { useState } from "react";

interface Props {
  onSolve: (n: number, timeLimit: number) => void;
}

const MAX_N = 14;

export function Controls({ onSolve }: Props) {
  const [n, setN] = useState(8);
  const [timeLimit, setTimeLimit] = useState(1000);
  const [error, setError] = useState<string | null>(null);

  function handleSolve() {
    if (n > MAX_N) {
      setError(`For performance reasons, max supported size is ${MAX_N}.`);
      return;
    }
    setError(null);
    onSolve(n, timeLimit);
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-4 items-center">
        <label className="flex gap-2 items-center">
          Size
          <input
            type="number"
            min={4}
            max={MAX_N}
            value={n}
            onChange={(e) => setN(Number(e.target.value))}
            className="border px-2 py-1 w-20"
          />
        </label>

        <label className="flex gap-2 items-center">
          Time (ms)
          <input
            type="number"
            min={1}
            value={timeLimit}
            onChange={(e) => setTimeLimit(Number(e.target.value))}
            className="border px-2 py-1 w-24"
          />
        </label>

        <button
          onClick={handleSolve}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Solve
        </button>
      </div>

      {error && (
        <p className="text-red-600 text-sm">
          {error}
        </p>
      )}
    </div>
  );
}
