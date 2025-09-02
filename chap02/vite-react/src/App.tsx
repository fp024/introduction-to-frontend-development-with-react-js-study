export default function App() {
  return (
    <>
      <div>첫 번째 영역</div>
      <div>두 번째 영역</div>
      <h1>result: {10 + 20}</h1>
      <h1>{10 < 20 ? '10이 더 작다' : '20이 더 크다'}</h1>
      {/* NOSONAR */ 10 > 20 && <h1>10이 20보다 크다</h1>}
      {/* NOSONAR */ 10 < 20 && <h1>10이 20보다 작다</h1>}
    </>
  );
}
