import { useState } from 'react';
import CountButtons from './components/CountButton';
import CountDisplay from './components/CountDisplay';

export default function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);
  const reset = () => setCount(0);

  return (
    <>
      <CountDisplay count={count} />
      <CountButtons increment={increment} decrement={decrement} reset={reset} />
    </>
  );
}
