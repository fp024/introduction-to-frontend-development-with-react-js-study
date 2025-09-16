import { useState } from 'react';

export default function CountButtons() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);
  const reset = () => setCount(0);

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
