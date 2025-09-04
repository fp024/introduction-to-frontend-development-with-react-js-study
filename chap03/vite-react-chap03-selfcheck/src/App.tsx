import Button from './components/Button';

export default function App() {
  const clickHandler = () => {
    alert('클릭되었습니다! 👍');
  };

  return <Button msg="클릭해주세요 😊" clickHandler={clickHandler} />;
}
