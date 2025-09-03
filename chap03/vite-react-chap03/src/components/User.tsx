export default function User(
  props: Readonly<{
    userObj: { name: string; age: number };
    clickHandler: () => void;
  }>
) {
  const {
    userObj: { name, age },
    clickHandler,
  } = props;

  return (
    <>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <button onClick={clickHandler}>클릭</button>
    </>
  );
}
