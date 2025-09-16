import { useReducer } from 'react';

function counterReducer(state: number, action: { type: string }) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export default function App() {
  const [count, countDispatch] = useReducer(counterReducer, 0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button type="button" onClick={() => countDispatch({ type: 'INCREMENT' })}>
        증가
      </button>
      <button type="button" onClick={() => countDispatch({ type: 'DECREMENT' })}>
        감소
      </button>
      <button type="button" onClick={() => countDispatch({ type: 'RESET' })}>
        초기화
      </button>
    </div>
  );
}
