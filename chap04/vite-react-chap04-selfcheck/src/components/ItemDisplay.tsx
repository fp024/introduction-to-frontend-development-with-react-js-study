import type { Item } from '../App';

export default function ItemDisplay({
  items,
  removeItem,
}: Readonly<{ items: Item[]; removeItem: (id: number) => void }>) {
  const itemsLI = items.map((i) => (
    <li key={i.id}>
      {i.name}
      <button type="button" onClick={() => removeItem(i.id)}>
        삭제
      </button>
    </li>
  ));
  return (
    <div>
      <h1>아이템 목록</h1>
      <ul>{itemsLI}</ul>
    </div>
  );
}
