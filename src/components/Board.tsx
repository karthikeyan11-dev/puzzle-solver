import { Cell } from "./Cell";

interface Props {
  board: number[];
}

export function Board({ board }: Props) {
  const n = board.length;

  return (
    <div
      className="grid gap-1"
      style={{ gridTemplateColumns: `repeat(${n}, 3rem)` }}
    >
      {Array.from({ length: n * n }).map((_, i) => {
        const row = Math.floor(i / n);
        const col = i % n;
        const hasQueen = board[row] === col;

        return (
          <Cell
            key={i}
            dark={(row + col) % 2 === 1}
            hasQueen={hasQueen}
          />
        );
      })}
    </div>
  );
}
