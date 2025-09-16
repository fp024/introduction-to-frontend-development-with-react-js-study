export default function Count({
  count,
  increment,
}: Readonly<{
  count: number;
  increment: () => void;
}>) {
  return (
    <>
      <h1>Counter: {count}</h1>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </>
  );
}
