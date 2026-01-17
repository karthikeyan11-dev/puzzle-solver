interface Props {
  dark: boolean;
  hasQueen: boolean;
}

export function Cell({ dark, hasQueen }: Props) {
  return (
    <div
      className={`w-12 h-12 flex items-center justify-center text-xl
      ${dark ? "bg-gray-500" : "bg-gray-300"}`}
    >
      {hasQueen ? "♛" : ""}
    </div>
  );
}
