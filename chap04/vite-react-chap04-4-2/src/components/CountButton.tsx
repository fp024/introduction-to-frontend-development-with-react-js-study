export default function CountButtons({
  increment,
  decrement,
  reset,
}: Readonly<{
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}>) {
  return (
    <>
      <button type="button" onClick={decrement}>
        감소
      </button>
      <button type="button" onClick={reset}>
        초기화
      </button>
      <button type="button" onClick={increment}>
        증가
      </button>
    </>
  );
}
