export default function User({
  userObj: { name, age },
  clickHandler,
}: Readonly<{
  userObj: { name: string; age: number }; //
  clickHandler: () => void;
}>) {
  return (
    <>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <button onClick={clickHandler}>클릭</button>
    </>
  );
}
