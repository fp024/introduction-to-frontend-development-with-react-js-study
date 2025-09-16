import { useState } from 'react';
import Count from './components/counter';

export default function App() {
  const [count, setCount] = useState(0);

  return <Count count={count} setCount={setCount} />;
}
