export default function ItemButton({
  itemCount,
  addItems,
}: Readonly<{ itemCount: number; addItems: () => void }>) {
  return (
    <div>
      <button type="button" onClick={addItems} disabled={itemCount === 3}>
        아이템 추가
      </button>
    </div>
  );
}
