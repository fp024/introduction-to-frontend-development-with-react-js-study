import { useReducer } from 'react';
import { cartReducer } from './reducer/cartReducer';
import { counterReducer } from './reducer/counterReducer';
import { userReducer } from './reducer/userReducer';

export default function App() {
  // 카운터 상태 관리
  const [count, countDispatch] = useReducer(counterReducer, 0);
  // 사용자 상태관리
  const [user, userDispatch] = useReducer(userReducer, {});
  // 장바구니 상태관리
  const [cart, cartDispatch] = useReducer(cartReducer, []);
  return (
    <div>
      {/* 각 상태를 사용한 UI 구성 */}
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
      <h2>User: {user.name}</h2>
      <button
        type="button"
        onClick={() => userDispatch({ type: 'SET_USER', payload: { name: 'Alice' } })}
      >
        Set User
      </button>
      <h2>Cart Items: {cart.length}</h2>
      <button
        type="button"
        onClick={() => cartDispatch({ type: 'ADD_ITEM', payload: { id: 1, name: 'Item 1' } })}
      >
        Add Item
      </button>
    </div>
  );
}
