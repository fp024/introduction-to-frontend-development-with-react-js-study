export default function App() {
  const clickHandler = (msg: string) => {
    alert(msg);
  };

  return (
    <button
      onClick={() => {
        clickHandler('hello');
      }}
    >
      click
    </button>
  );
}
