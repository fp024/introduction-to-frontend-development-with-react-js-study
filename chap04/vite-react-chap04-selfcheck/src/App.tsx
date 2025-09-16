import { useReducer } from 'react';
import itemReducer from './reducer/itemReducer';
import ItemDisplay from './components/ItemDisplay';
import ItemButton from './components/ItemButton';

export interface Item {
  id: number;
  name: string;
}

const ITEMS_DATA: Item[] = [
  { id: 1, name: '사과' },
  { id: 2, name: '바나나' },
  { id: 3, name: '오렌지' },
];

export default function App() {
  const [items, itemDispatch] = useReducer(itemReducer, []);
  const addItems = () => {
    ITEMS_DATA.forEach((item) => {
      itemDispatch({ type: 'ADD_ITEM', payload: item });
    });
  };

  const removeItem = (id: number) => {
    itemDispatch({ type: 'REMOVE_ITEM', payload: { id: id } });
  };

  return (
    <div>
      <ItemDisplay items={items} removeItem={removeItem} />
      <ItemButton itemCount={items.length} addItems={addItems} />
    </div>
  );
}
