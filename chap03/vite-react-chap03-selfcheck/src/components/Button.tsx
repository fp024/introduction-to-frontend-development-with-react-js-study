export default function Button({
  msg,
  clickHandler,
}: Readonly<{ msg: string; clickHandler: () => void }>) {
  return <button onClick={clickHandler}>{msg}</button>;
}
