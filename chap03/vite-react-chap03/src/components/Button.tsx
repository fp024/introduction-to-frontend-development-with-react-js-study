export default function Button({ onFive }: Readonly<{ onFive: () => void }>) {
  return <button onClick={onFive}>click</button>;
}
