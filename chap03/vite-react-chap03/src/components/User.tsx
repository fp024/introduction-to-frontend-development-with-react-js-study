export default function User(props: Readonly<{ name: string; age: number }>) {
  return (
    <>
      <p>name: {props.name}</p>
      <p>age: {props.age}</p>
    </>
  );
}
