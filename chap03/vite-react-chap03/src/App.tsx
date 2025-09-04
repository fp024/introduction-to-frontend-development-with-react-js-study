export default function App() {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e);
  };
  return <button onClick={clickHandler}>click</button>;
}
