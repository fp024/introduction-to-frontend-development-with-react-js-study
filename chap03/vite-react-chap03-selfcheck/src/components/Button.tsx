export default function Button({
  msg,
  clickHandler,
}: Readonly<{ msg: string; clickHandler: () => void }>) {
  return (
    <button type="button" onClick={clickHandler}>
      {msg}
    </button>
  );
}
