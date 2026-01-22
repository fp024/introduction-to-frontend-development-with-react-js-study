import { css } from '@emotion/css';
import './App.css';
import { useState } from 'react';

function App() {
  const [isActive, setIsActive] = useState(true);

  return (
    <button
      type="button"
      className={css`
        cursor: pointer;
        background: ${isActive ? '#bf4f74' : 'transparent'};
        border-radius: 3px;
        border: 2px solid #bf4f74;
        color: ${isActive ? 'white' : '#bf4f74'};
        margin: 0 1em;
        padding: 0.25em 1em;
      `}
      onClick={() => setIsActive(!isActive)}
    >
      Click Me
    </button>
  );
}

export default App;
