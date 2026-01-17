interface Props {
  board: number[];
}

export function Board({ board }: Props) {
  const n = board.length;

  return (
    <div className="grid grid-cols-8 gap-1">
      {Array.from({ length: n * n }).map((_, i) => {
        const row = Math.floor(i / n);
        const col = i % n;
        const hasQueen = board[row] === col;

        return (
          <div
            key={i}
            className={`w-12 h-12 flex items-center justify-center
              ${(row + col) % 2 === 0 ? "bg-gray-200" : "bg-gray-400"}`}
          >
            {hasQueen && "♛"}
          </div>
        );
      })}
    </div>
  );
}
