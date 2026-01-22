import { twMerge } from 'tailwind-merge';
import './App.css';
import { useState } from 'react';

function App() {
  const [toggleState, setToggleState] = useState(false);

  const toggleEvent = () => setToggleState((prev) => !prev);

  return (
    <button
      className={twMerge(
        'bg-transparent text-[#bf4f74] rounded-[3px] border-2',
        'border-[#bf4f74] m-[0.1em] py-[0.25em] px-[1em]',
        toggleState && 'bg-rose-500 text-white'
      )}
      onClick={toggleEvent}
    >
      Click Me
    </button>
  );
}

export default App;
