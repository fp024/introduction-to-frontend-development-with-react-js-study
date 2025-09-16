import type { Dispatch, SetStateAction } from 'react';

export default function Count({
  count,
  setCount,
}: Readonly<{
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}>) {
  return (
    <>
      <h1>Counter: {count}</h1>
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        Increment
      </button>
    </>
  );
}
