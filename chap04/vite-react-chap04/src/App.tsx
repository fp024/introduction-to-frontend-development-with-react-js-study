import { useState } from 'react';

export default function App() {
  const [name, setName] = useState<string | null>(null);
  const [age, setAge] = useState<number | null>(null);
  const [gender, setGender] = useState<string | null>(null);
  const clickHandler = () => {
    setName('Mike');
    setAge(23);
    setGender('female');
  };

  return (
    <div>
      <p>이름: {name}</p>
      <p>나이: {age}</p>
      <p>성별: {gender}</p>
      <button onClick={clickHandler}>변경</button>
    </div>
  );
}
