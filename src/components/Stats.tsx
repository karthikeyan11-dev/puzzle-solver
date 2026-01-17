import type { SolveResult } from "../puzzles/queens/types";

interface Props {
  result: SolveResult;
}

export function Stats({ result }: Props) {
  return (
    <div className="bg-white p-4 rounded shadow w-96">
      <p><b>States Explored:</b> {result.statesExplored}</p>

      <p>
        <b>Time Taken:</b>{" "}
        {result.timeTakenMs < 1
          ? "< 1 ms"
          : `${result.timeTakenMs.toFixed(2)} ms`}
      </p>

      <p><b>Status:</b> Solved</p>

      {result.exceededTimeLimit && (
        <p className="text-orange-600 mt-2">
          ⚠️ Took longer than the provided time limit — sorry about that!
        </p>
      )}
    </div>
  );
}
