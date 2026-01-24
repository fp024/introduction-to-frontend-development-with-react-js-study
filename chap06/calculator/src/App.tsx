import { useState } from 'react';

// --- (1)
interface CalculatorState {
  currentNumber: string; // (1) 현재 계산기 화면에 표시되는 숫자
  previousNumber: string; // (2) 연산 기호 버튼을 클릭하기 전에 입력한 숫자를 저장
  operation: string | null; // (3) 클릭한 연산 기호를 저장
  isNewNumber: boolean; // (4) 새로운 숫자를 새로 입력할지 여부. true이면 새로운 숮자로 대체, false이면 기존 숫자 뒤에 이어 붙임
}

function App() {
  // --- (2)
  const [state, setState] = useState<CalculatorState>({
    currentNumber: '0',
    previousNumber: '',
    operation: null,
    isNewNumber: true,
  });

  // 숫자 버튼 클릭 처리 함수
  const handleNumberClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const value = event.currentTarget.value;
    if (state.isNewNumber) {
      // 현재 숫자를 새로운 숫자로 대체 (기존 state값에 currentNumber, isNewNumber를 새로운 값으로 업데이트한 복제본을 설정)
      setState({
        ...state,
        currentNumber: value,
        isNewNumber: false,
      });
    } else {
      // 기존 숫자에 새로운 숫자를 이어 붙임
      setState({
        ...state,
        currentNumber: state.currentNumber + value,
      });
    }
  };

  // 연산 기호 버튼 클릭 처리 함수
  const handleOperatorClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    // 현재 클릭한 연산 기호 가져오기
    const operator = event.currentTarget.value; // --- (3)

    // 현재 출력칸에 표시된 숫자를 숫자형으로 변환
    const current = Number.parseFloat(state.currentNumber || '0'); // --- (4)

    // 이전 숫자와 연산 기호가 모두 있는 경우 (연속 연산) // --- (5)
    if (state.previousNumber !== '' && state.operation) {
      const prev = Number.parseFloat(state.previousNumber); // --- (6)
      let result = 0; // --- (7)
      // 연산 기호에 따라 연산 수행 --- (8)
      switch (state.operation) {
        case '+':
          result = prev + current;
          break;
        case '-':
          result = prev - current;
          break;
        case '*':
          result = prev * current;
          break;
        case '/':
          result = prev / current;
          break;
      }

      if (operator === '=') {
        // = 버튼 클릭 시 연산 종료  --- (9)
        setState({
          currentNumber: result.toString(),
          previousNumber: '',
          operation: null,
          isNewNumber: true,
        });
      } else {
        // 다른 연산 기호 버튼 클릭 시 연산 유지  --- (10)
        setState({
          currentNumber: '',
          previousNumber: result.toString(),
          operation: operator,
          isNewNumber: true,
        });
      }
    } else {
      // 첫 번째 숫자 입력 후 연산 기호 버튼 클릭시 --- (11)
      setState({
        currentNumber: '',
        previousNumber: current.toString(),
        operation: operator,
        isNewNumber: true,
      });
    }
  };

  // C 버튼 클릭 처리 함수: 모든 상태 초기화
  const handleClear = () => {
    setState({
      currentNumber: '0',
      previousNumber: '',
      operation: null,
      isNewNumber: true,
    });
  };

  // 소수점 버튼 클릭 처리 함수: 현재 숫자에 소수점이 없을 경우에만 추가
  const handleDot = () => {
    if (!state.currentNumber.includes('.')) {
      setState({
        ...state,
        currentNumber: state.currentNumber + '.',
        isNewNumber: false,
      });
    }
  };

  return (
    <article className="calculator">
      <form name="forms">
        <input type="text" name="output" value={state.currentNumber} readOnly />
        <input type="button" className="clear" value="C" onClick={handleClear} />
        <input type="button" className="operator" value="/" onClick={handleOperatorClick} />
        <input type="button" value="1" onClick={handleNumberClick} />
        <input type="button" value="2" onClick={handleNumberClick} />
        <input type="button" value="3" onClick={handleNumberClick} />
        <input type="button" className="operator" value="*" onClick={handleOperatorClick} />
        <input type="button" value="4" onClick={handleNumberClick} />
        <input type="button" value="5" onClick={handleNumberClick} />
        <input type="button" value="6" onClick={handleNumberClick} />
        <input type="button" className="operator" value="+" onClick={handleOperatorClick} />
        <input type="button" value="7" onClick={handleNumberClick} />
        <input type="button" value="8" onClick={handleNumberClick} />
        <input type="button" value="9" onClick={handleNumberClick} />
        <input type="button" className="operator" value="-" onClick={handleOperatorClick} />
        <input type="button" className="dot" value="." onClick={handleDot} />
        <input type="button" value="0" onClick={handleNumberClick} />
        <input type="button" className="operator result" value="=" onClick={handleOperatorClick} />
      </form>
    </article>
  );
}

export default App;
