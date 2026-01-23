import { useState } from 'react';

function App() {
  const [state, setState] = useState({
    currentNumber: '0', // (1) 현재 계산기 화면에 표시되는 숫자
    previousNumber: '', // (2) 연산 기호 버튼을 클릭하기 전에 입력한 숫자를 저장
    operation: null, // (3) 클릭한 연산 기호를 저장
    isNewNumber: true, // (4) 새로운 숫자를 새로 입력할지 여부. true이면 새로운 숮자로 대체, false이면 기존 숫자 뒤에 이어 붙임
  });

  return (
    <article className="calculator">
      <form name="forms">
        <input type="text" name="output" value={state.currentNumber} readOnly />
        <input type="button" className="clear" value="C" />
        <input type="button" className="operator" value="/" />
        <input type="button" value="1" />
        <input type="button" value="2" />
        <input type="button" value="3" />
        <input type="button" className="operator" value="*" />
        <input type="button" value="4" />
        <input type="button" value="5" />
        <input type="button" value="6" />
        <input type="button" className="operator" value="+" />
        <input type="button" value="7" />
        <input type="button" value="8" />
        <input type="button" value="9" />
        <input type="button" className="operator" value="-" />
        <input type="button" className="dot" value="." />
        <input type="button" value="0" />
        <input type="button" className="operator result" value="=" />
      </form>
    </article>
  );
}

export default App;
